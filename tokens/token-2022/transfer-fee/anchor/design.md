
# 🌾 Solana SPL Token 2022 示例：Harvest Withheld Tokens

本合约展示了如何使用 **SPL Token 2022** 的 TransferFee 扩展中的 `harvest_withheld_tokens_to_mint` 方法，从多个 TokenAccount 中收集被扣留（withheld）的手续费，并统一汇总到 Mint 中。

---

## 📦 所用依赖模块

```rust
use anchor_lang::prelude::*;
use anchor_spl::token_interface::{
    harvest_withheld_tokens_to_mint, HarvestWithheldTokensToMint, Mint, Token2022, TokenAccount,
};

	•	使用 anchor_spl::token_interface 的 CPI 方法与账户接口。
	•	涉及 TransferFee 模块中手续费收集的内建 CPI 操作：harvest_withheld_tokens_to_mint。

⸻

📜 账户结构定义：Harvest

#[derive(Accounts)]
pub struct Harvest<'info> {
    #[account(mut)]
    pub mint_account: InterfaceAccount<'info, Mint>,
    pub token_program: Program<'info, Token2022>,
}

	•	mint_account：目标 Mint 账户，所有收集到的费用将合并至此。
	•	token_program：Token 2022 程序 ID，必须为 SPL Token 2022。

⸻

🔁 主处理逻辑：process_harvest

pub fn process_harvest<'info>(ctx: Context<'_, '_, 'info, 'info, Harvest<'info>>) -> Result<()> {

使用 remaining_accounts 参数，允许调用者传入任意多个需要收取手续费的 TokenAccount。

⸻

🔎 逻辑解析

✅ 步骤 1：筛选有效来源账户（TokenAccount 且属于该 Mint）

let sources = ctx
    .remaining_accounts
    .iter()
    .filter_map(|account| {
        InterfaceAccount::<TokenAccount>::try_from(account)
            .ok()
            .filter(|token_account| token_account.mint == ctx.accounts.mint_account.key())
            .map(|_| account.to_account_info())
    })
    .collect::<Vec<_>>();

	•	筛选条件：
	•	是合法的 TokenAccount。
	•	其 mint 字段与当前 mint_account 匹配。

⚠️ 只有属于同一个 mint 的 TokenAccount 才能进行手续费合并。

⸻

✅ 步骤 2：调用 CPI 收集手续费

harvest_withheld_tokens_to_mint(
    CpiContext::new(
        ctx.accounts.token_program.to_account_info(),
        HarvestWithheldTokensToMint {
            token_program_id: ctx.accounts.token_program.to_account_info(),
            mint: ctx.accounts.mint_account.to_account_info(),
        },
    ),
    sources,
)?;

	•	sources 参数是被扣手续费的账户来源（通常是接收转账的用户账户）。
	•	所有来源中的费用将转入到 mint_account 的 TransferFee 余额中。

⸻

📘 背景知识：什么是 TransferFee？

SPL Token 2022 支持 TransferFee 扩展，可在转账时收取手续费，并将其暂存在接收账户中（不是直接转入 mint）。这些手续费需要管理员调用 harvest_withheld_tokens_to_mint 明确收集，才会聚合到 mint。

⸻

🧪 使用方式

调用 process_harvest 时：
	•	将 mint_account、token_program 作为主要账户。
	•	将需要收集手续费的若干个 TokenAccount 放入 remaining_accounts 中。

program
  .request()
  .accounts({
    mintAccount: ...,
    tokenProgram: ...,
  })
  .remainingAccounts([
    { pubkey: userToken1, isSigner: false, isWritable: true },
    { pubkey: userToken2, isSigner: false, isWritable: true },
    ...
  ])
  .rpc();



⸻

✅ 总结

功能	描述
🎯 作用	聚合 token 接收账户中暂存的手续费
🧩 使用模块	TransferFee 扩展（仅限 SPL Token 2022）
💡 技术要点	使用 remaining_accounts 支持动态账户输入
⚠️ 注意事项	只能收集与当前 mint 匹配的账户中的手续费
🛠 CPI 调用方法	harvest_withheld_tokens_to_mint



⸻

如你需要进一步了解 TransferFee 扩展的启用方式、测试脚本或是否支持自动定期 harvest，欢迎继续提问！

