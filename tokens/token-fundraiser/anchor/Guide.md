# SPL Token 众筹活动

本示例演示了如何为 SPL Token 创建众筹活动。

在本示例中，用户可以创建一个众筹账户，并指定希望收到的 `mint`（代币）及筹款目标。

---

## 架构

一个众筹账户包含以下字段：

```rust
#[account]
#[derive(InitSpace)]
pub struct Fundraiser {
    pub maker: Pubkey,
    pub mint_to_raise: Pubkey,
    pub amount_to_raise: u64,
    pub current_amount: u64,
    pub time_started: i64,
    pub duration: u8,
    pub bump: u8,
}

该状态账户存储的信息包括：
	•	maker：发起众筹的人
	•	mint_to_raise：发起者希望接收的代币 mint 地址
	•	amount_to_raise：众筹的目标金额
	•	current_amount：当前已筹集的金额
	•	time_started：众筹活动创建的时间
	•	duration：众筹活动持续的天数
	•	bump：由于 Fundraiser 账户是 PDA（程序派生地址），需要存储其 bump 值

InitSpace 派生宏用于计算账户在链上所需的存储空间（不包括 Anchor 账户标识符）。

⸻

创建新的众筹账户

Context（上下文）

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub maker: Signer<'info>,
    pub mint_to_raise: Account<'info, Mint>,
    #[account(
        init,
        payer = maker,
        seeds = [b"fundraiser", maker.key().as_ref()],
        bump,
        space = ANCHOR_DISCRIMINATOR + Fundraiser::INIT_SPACE,
    )]
    pub fundraiser: Account<'info, Fundraiser>,
    #[account(
        init,
        payer = maker,
        associated_token::mint = mint_to_raise,
        associated_token::authority = fundraiser,
    )]
    pub vault: Account<'info, TokenAccount>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
}

账户解析
	•	maker：众筹发起者，交易的签名者，并支付创建众筹账户的费用
	•	mint_to_raise：希望接收的代币 mint 地址
	•	fundraiser：众筹状态账户，由发起人支付初始化费用
	•	通过 "fundraiser" 字节数组和发起者 Pubkey 生成 PDA
	•	Anchor 计算 bump 并存储
	•	vault：存放捐款的 ATA（关联 Token 账户）
	•	该账户派生自 mint_to_raise 和 fundraiser
	•	system_program：Solana 系统程序
	•	token_program 和 associated_token_program：用于创建 ATA

初始化函数

impl<'info> Initialize<'info> {
    pub fn initialize(&mut self, amount: u64, duration: u8, bumps: &InitializeBumps) -> Result<()> {
        // 确保筹款金额满足最低要求
        require!(
            amount > MIN_AMOUNT_TO_RAISE.pow(self.mint_to_raise.decimals as u32),
            FundraiserError::InvalidAmount
        );

        // 初始化众筹账户
        self.fundraiser.set_inner(Fundraiser {
            maker: self.maker.key(),
            mint_to_raise: self.mint_to_raise.key(),
            amount_to_raise: amount,
            current_amount: 0,
            time_started: Clock::get()?.unix_timestamp,
            duration,
            bump: bumps.fundraiser
        });

        Ok(())
    }
}

此函数：
	•	确保目标筹款金额大于最小金额
	•	设置 Fundraiser 账户数据

⸻

用户捐款

每位捐赠者都有一个 贡献账户（Contributor）：

#[account]
#[derive(InitSpace)]
pub struct Contributor {
    pub amount: u64,
}

此账户仅存储某个捐赠者的累计捐款金额。

捐款 Context

#[derive(Accounts)]
pub struct Contribute<'info> {
    #[account(mut)]
    pub contributor: Signer<'info>,
    pub mint_to_raise: Account<'info, Mint>,
    #[account(
        mut,
        has_one = mint_to_raise,
        seeds = [b"fundraiser".as_ref(), fundraiser.maker.as_ref()],
        bump = fundraiser.bump,
    )]
    pub fundraiser: Account<'info, Fundraiser>,
    #[account(
        init_if_needed,
        payer = contributor,
        seeds = [b"contributor", fundraiser.key().as_ref(), contributor.key().as_ref()],
        bump,
        space = ANCHOR_DISCRIMINATOR + Contributor::INIT_SPACE,
    )]
    pub contributor_account: Account<'info, Contributor>,
    #[account(
        mut,
        associated_token::mint = mint_to_raise,
        associated_token::authority = contributor
    )]
    pub contributor_ata: Account<'info, TokenAccount>,
    #[account(
        mut,
        associated_token::mint = fundraiser.mint_to_raise,
        associated_token::authority = fundraiser
    )]
    pub vault: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

账户解析
	•	contributor：捐赠者地址，交易签名者
	•	mint_to_raise：目标代币的 mint 地址
	•	fundraiser：对应的众筹账户
	•	contributor_account：存储捐赠者累计捐款金额的账户
	•	contributor_ata：捐赠者的 Token 账户，捐款将从此账户扣除
	•	vault：存放捐款的 Token 账户
	•	token_program：用于执行 Token 交易的 CPI（跨程序调用）

捐款逻辑

impl<'info> Contribute<'info> {
    pub fn contribute(&mut self, amount: u64) -> Result<()> {
        // 确保最小捐款金额
        require!(
            amount > 1_u8.pow(self.mint_to_raise.decimals as u32) as u64, 
            FundraiserError::ContributionTooSmall
        );

        // 确保单次捐款不超过目标金额的 10%
        require!(
            amount <= (self.fundraiser.amount_to_raise * MAX_CONTRIBUTION_PERCENTAGE) / PERCENTAGE_SCALER, 
            FundraiserError::ContributionTooBig
        );

        // 确保个人累计捐款不超过目标金额的 10%
        require!(
            (self.contributor_account.amount + amount) <= (self.fundraiser.amount_to_raise * MAX_CONTRIBUTION_PERCENTAGE) / PERCENTAGE_SCALER,
            FundraiserError::MaximumContributionsReached
        );

        // 确保众筹活动仍然有效
        let current_time = Clock::get()?.unix_timestamp;
        require!(
            self.fundraiser.duration > ((current_time - self.fundraiser.time_started) / SECONDS_TO_DAYS) as u8,
            FundraiserError::FundraisingEnded
        );

        // 进行 Token 转账
        let cpi_ctx = CpiContext::new(
            self.token_program.to_account_info(),
            Transfer {
                from: self.contributor_ata.to_account_info(),
                to: self.vault.to_account_info(),
                authority: self.contributor.to_account_info(),
            }
        );

        transfer(cpi_ctx, amount)?;

        // 更新状态
        self.fundraiser.current_amount += amount;
        self.contributor_account.amount += amount;

        Ok(())
    }
}



⸻

这是 SPL Token 众筹的主要流程，如需更多细节，请告诉我！ 😊

