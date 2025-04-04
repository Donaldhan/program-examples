以下是纯粹的 Markdown 语法内容，可直接复制到 .md 文件或 Markdown 编辑器中使用：

# 🧠 Solana Anchor 智能合约分析 - Memo Transfer 示例

该合约示例展示了如何使用 Solana 的 SPL Token-2022 扩展功能（扩展类型为 `MemoTransfer`）来初始化并控制带有 Memo 限制的 Token 账户。
转账时，必须携带memoInstruction

```ts
const memoInstruction = createMemoInstruction('hello, world', [wallet.publicKey]);

    const transferInstruction = createTransferInstruction(
      sourceTokenAccount, // Source Token Account
      tokenKeypair.publicKey, // Destination Token Account
      wallet.publicKey, // Source Token Account owner
      1, // Amount
      undefined, // Additional signers
      TOKEN_2022_PROGRAM_ID, // Token Extension Program ID
    );
```

只有关系meme扩展时，才可以不用memoInstruction进行转移， 具体建测试脚本
---

## 📦 所用 Crate 与模块

```rust
use anchor_lang::prelude::*;
use anchor_lang::system_program::{create_account, CreateAccount};
use anchor_spl::{
    token_2022::{
        initialize_account3,
        spl_token_2022::{extension::ExtensionType, pod::PodAccount},
        InitializeAccount3,
    },
    token_interface::{
        memo_transfer_disable, memo_transfer_initialize, MemoTransfer, Mint, Token2022,
        TokenAccount,
    },
};

	•	使用了 anchor_lang 提供的 Anchor 基础模块。
	•	使用 system_program 创建账户。
	•	使用 anchor_spl 的 token_2022 来支持带扩展功能的 Token。
	•	memo_transfer 是 Token-2022 的一个可选扩展，用于强制 Token 转账必须包含 Memo。

⸻

📜 Program 声明

declare_id!("FDJDYE9o7Qg5UQ6mt12JSStqpVEaysQF94s1EyXh2uTu");

声明当前合约的 Program ID。

⸻

🏗 initialize 函数

🧩 目的

创建一个带 MemoTransfer 扩展的 TokenAccount，并完成初始化。

🔁 核心步骤
	1.	计算所需空间和租金：

let token_account_size =
    ExtensionType::try_calculate_account_len::<PodAccount>(&[ExtensionType::MemoTransfer])?;

let lamports = (Rent::get()?).minimum_balance(token_account_size);

	2.	创建账户：

create_account(
    CpiContext::new(...),
    lamports,
    token_account_size as u64,
    &ctx.accounts.token_program.key(),
)?;

	3.	初始化账户（标准初始化）：

initialize_account3(CpiContext::new(...))?;

	4.	初始化 MemoTransfer 扩展：

memo_transfer_initialize(CpiContext::new(...))?;

⚠️ 必须先调用 initialize_account3 初始化基本 TokenAccount，然后再初始化扩展，否则无效。

⸻

❌ disable 函数

🧩 目的

关闭指定账户的 MemoTransfer 扩展功能。

✅ 实现

memo_transfer_disable(CpiContext::new(
    ctx.accounts.token_program.to_account_info(),
    MemoTransfer {
        token_program_id: ctx.accounts.token_program.to_account_info(),
        account: ctx.accounts.token_account.to_account_info(),
        owner: ctx.accounts.owner.to_account_info(),
    },
))?;



⸻

🧾 账户定义（Context）

Initialize 结构体

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(mut)]
    pub token_account: Signer<'info>,

    pub mint_account: InterfaceAccount<'info, Mint>,
    pub token_program: Program<'info, Token2022>,
    pub system_program: Program<'info, System>,
}

Disable 结构体

#[derive(Accounts)]
pub struct Disable<'info> {
    #[account(mut)]
    pub owner: Signer<'info>,

    #[account(
        mut,
        token::authority = owner,
    )]
    pub token_account: InterfaceAccount<'info, TokenAccount>,

    pub token_program: Program<'info, Token2022>,
}



⸻

📌 关键点总结
	•	使用了 ExtensionType::MemoTransfer 扩展，需要手动计算空间与租金。
	•	initialize_account3 是用于带扩展的新初始化方式。
	•	memo_transfer_initialize 和 memo_transfer_disable 分别启用与关闭该扩展功能。
	•	支持 SPL Token-2022 的合约必须兼容新版接口 Token2022。

⸻

如需我补充测试代码或调用方法（比如如何用 TypeScript 客户端调用 initialize），欢迎继续提问！

