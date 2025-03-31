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




# `create_metadata_accounts_v3` vs `create_master_edition_v3`

## **概述**

`create_metadata_accounts_v3` 和 `create_master_edition_v3` 是 Metaplex Token Metadata Program 的两个关键指令，它们的作用和使用场景有所不同。

---

## **1. `create_metadata_accounts_v3`**

### **作用**
- 创建 NFT 的 **元数据账户（Metadata Account）**，存储 NFT 的基本信息，例如名称、符号、URI、创作者信息等。

### **主要字段**
- **`name`**：NFT 名称
- **`symbol`**：NFT 符号
- **`uri`**：NFT 的元数据链接（通常指向 Arweave 或 IPFS）
- **`seller_fee_basis_points`**：NFT 在二级市场上的版税（以百分比的百倍值表示，如 500 表示 5%）
- **`creators`**：创作者列表及其版税分配
- **`collection`**：NFT 所属的集合（可选）
- **`uses`**：NFT 的可使用次数（可选）

### **使用场景**
- 每个 NFT **必须** 先调用 `create_metadata_accounts_v3`，才能使用 Metaplex 的功能（如 OpenSea、Magic Eden 交易）。
- 这个操作只是创建元数据，并不会影响 NFT 的稀缺性或独特性。

---

## **2. `create_master_edition_v3`**

### **作用**
- 创建 **主版本（Master Edition）账户**，确保 NFT 只能铸造一个（1/1 NFT）。
- 也可以用于可扩展的 NFT 版本控制，如 `Max Supply` 限制可铸造的副本数量。

### **主要字段**
- **`max_supply`**：NFT 最大供应量：
  - `None` → 只能有 1 个 NFT（1/1）
  - `Some(n)` → 允许最多 `n` 个副本
- **`metadata`**：指向 `create_metadata_accounts_v3` 创建的 `metadata_account`
- **`edition`**：指向 `Master Edition` 账户

### **使用场景**
- **如果想创建一个真正唯一的 NFT（1/1），必须调用 `create_master_edition_v3`**。
- **如果不调用 `create_master_edition_v3`，NFT 只是一个普通的 SPL 代币**，理论上可以继续增发（尽管默认情况下 mint 权限是受限的）。
- 适用于 **PFP 项目、艺术 NFT、音乐 NFT** 等，确保 NFT 供应量不会被篡改。

---

## **主要区别总结**

| 指令 | 作用 | 是否必须 | 影响供应量 | 主要用途 |
|------|------|--------|----------|--------|
| `create_metadata_accounts_v3` | 创建 NFT 元数据 | 是 | 否 | 设定 NFT 名称、符号、URI、创作者等信息 |
| `create_master_edition_v3` | 创建 NFT 主版本 | 否（但推荐） | 是 | 限制 NFT 供应量，确保 1/1 |

---

## **流程示例**

如果要创建一个真正唯一的 NFT（1/1），流程如下：

1. **铸造 NFT 代币** → `mint_to`
2. **创建元数据** → `create_metadata_accounts_v3`
3. **创建主版本** → `create_master_edition_v3`

这样 NFT 就无法被二次铸造，确保了真正的唯一性。

如果 **不执行 `create_master_edition_v3`**，NFT 仍然可以被转移，但理论上可能会有多个副本（如果 mint 权限未被冻结）。

---

## **总结**

- **`create_metadata_accounts_v3`** 负责 **NFT 的元数据**，但 **不控制供应量**。
- **`create_master_edition_v3`** 负责 **确保 NFT 只能铸造 1 份**，限制 NFT 的最大供应量。
- **如果要创建 1/1 NFT**，必须 **同时调用** 这两个指令。

🚀 **推荐最佳实践：如果要创建不可篡改的 1/1 NFT，一定要调用 `create_master_edition_v3`！**

