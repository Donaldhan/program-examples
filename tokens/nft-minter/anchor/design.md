# NFT 铸造程序总结

## **概述**
本 Solana 智能合约使用 Rust 和 Anchor 框架，实现 NFT（非同质化代币）的铸造。该程序遵循以下流程：
1. 使用 `mint_to` 铸造 SPL 代币。
2. 使用 `create_metadata_accounts_v3` 创建 NFT 元数据。
3. 使用 `create_master_edition_v3` 创建主版本，使 NFT 具有唯一性。

## **主要功能**

### **1. mint_nft 函数**
`mint_nft` 函数负责 NFT 的创建，接受以下三个参数：
- `nft_name: String` - NFT 名称
- `nft_symbol: String` - NFT 符号
- `nft_uri: String` - NFT 元数据 URI

#### **mint_nft 执行流程**
1. **铸造 NFT 代币**：
   - 调用 `mint_to` 生成 1 个代币。
2. **创建元数据账户**：
   - 调用 `create_metadata_accounts_v3` 关联 NFT 元数据。
3. **创建主版本账户**：
   - 调用 `create_master_edition_v3` 使 NFT 具有唯一性。

## **账户说明**

### **1. 签名账户**
- `payer`: 交易的支付者和签名者。

### **2. 元数据与版本账户**
- `metadata_account`: 存储 NFT 元数据（基于 PDA 派生地址）。
- `edition_account`: 存储 NFT 主版本信息（基于 PDA 派生地址）。

### **3. 代币账户**
- `mint_account`: 用于 NFT 的代币铸造（0 小数位，由支付者控制）。
- `associated_token_account`: NFT 持有账户（必要时自动创建）。

### **4. 相关程序与系统账户**
- `token_program`: SPL 代币程序（用于铸造代币）。
- `token_metadata_program`: Metaplex 代币元数据程序（用于管理 NFT 元数据）。
- `associated_token_program`: 处理关联代币账户。
- `system_program`: Solana 系统程序（用于账户创建）。
- `rent`: Solana 租金系统变量（管理账户租金）。

## **PDA（程序派生地址）使用**
- `metadata_account` 和 `edition_account` 使用 `token_metadata_program` 及 `mint_account` 的密钥派生。
- `seeds` 参数确保 PDA 派生地址的正确性。

## **跨程序调用（CPI）**
- `mint_to`: 调用 SPL 代币程序铸造 NFT。
- `create_metadata_accounts_v3`: 调用 Metaplex 代币元数据程序创建元数据。
- `create_master_edition_v3`: 调用 Metaplex 创建 NFT 主版本。

## **总结**
该程序利用 Anchor 框架的 PDA 验证、CPI 调用和结构化账户管理，高效创建 NFT，确保其唯一性和可扩展性。

