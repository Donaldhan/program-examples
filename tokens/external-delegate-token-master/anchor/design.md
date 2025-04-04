当然，以下是对应的 Markdown 源代码内容，你可以直接复制保存为 .md 文件使用：

# 📦 Solana 程序：`external_delegate_token_master`

该程序允许用户绑定以太坊地址，并通过以太坊签名验证从其 PDA 转移 SPL Token，实现了跨链地址授权的代币转账逻辑。

## 📑 Program ID

```rust
declare_id!("FYPkt5VWMvtyWZDMGCwoKFkE3wXTzphicTpnNGuHWVbD");



⸻

🧠 模块功能概述

函数名	功能简介
initialize	初始化用户账户并设置其 Solana 授权地址。
set_ethereum_address	设置/更新用户绑定的以太坊地址。
transfer_tokens	验证以太坊签名，若验证成功，则通过 PDA 转账 Token。
authority_transfer	使用 Solana 签名权限（authority）直接从 PDA 转账。



⸻

🗂 账户结构定义

🧾 UserAccount

#[account]
pub struct UserAccount {
    pub authority: Pubkey,           // Solana 授权地址
    pub ethereum_address: [u8; 20],  // 绑定的以太坊地址
}



⸻

🧩 指令处理函数解释

1. initialize

pub fn initialize(ctx: Context<Initialize>) -> Result<()>

	•	初始化 UserAccount。
	•	设置 Solana authority。
	•	默认以太坊地址为 [0u8; 20]。

2. set_ethereum_address

pub fn set_ethereum_address(ctx: Context<SetEthereumAddress>, ethereum_address: [u8; 20]) -> Result<()>

	•	更新 UserAccount 中的绑定以太坊地址。

3. transfer_tokens

pub fn transfer_tokens(ctx: Context<TransferTokens>, amount: u64, signature: [u8; 65], message: [u8; 32]) -> Result<()>

	•	通过 secp256k1 签名验证以太坊地址的签名。
	•	验证通过后，从 user_pda 向 recipient_token_account 转账 Token。

4. authority_transfer

pub fn authority_transfer(ctx: Context<AuthorityTransfer>, amount: u64) -> Result<()>

	•	使用 Solana authority 直接通过 PDA 授权执行 Token 转账。

⸻

🔐 签名验证逻辑

fn verify_ethereum_signature(ethereum_address: &[u8; 20], message: &[u8; 32], signature: &[u8; 65]) -> bool

	1.	提取签名和恢复 ID。
	2.	使用 secp256k1_recover 恢复公钥。
	3.	对公钥做 Keccak256 哈希，取最后 20 字节为地址。
	4.	对比恢复地址和 UserAccount 中的以太坊地址。

⸻

⚠️ 错误码

#[error_code]
pub enum ErrorCode {
    #[msg("Invalid Ethereum signature")]
    InvalidSignature,
}



⸻

🧬 PDA Seeds 构造

seeds = [user_account.key().as_ref()]

用户 PDA 的 seeds 仅以其 UserAccount 为种子构建。

⸻

📌 注意事项
	•	PDA 权限签名依赖 bump，由 #[account(..., bump)] 提供。
	•	签名验证部分假设消息是 keccak256 哈希后的内容（EIP-191 风格需手动调整）。
	•	Token 账户需预先存在并正确设置。

⸻

如需生成 PDF 或添加使用示例，请继续告诉我！

是否需要我将该 Markdown 转为 PDF 文件供你下载？