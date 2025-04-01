# Solana NFT 集合创建程序解析

本程序使用 `anchor_lang` 框架在 Solana 区块链上创建 NFT 集合，并结合 `anchor_spl` 进行 SPL 代币和 Metaplex 元数据的操作。

## 依赖导入
```rust
use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken, 
    metadata::Metadata, 
    token::{ mint_to, Mint, MintTo, Token, TokenAccount }
};
use anchor_spl::metadata::mpl_token_metadata::{
    instructions::{ 
        CreateMasterEditionV3Cpi, CreateMasterEditionV3CpiAccounts, 
        CreateMasterEditionV3InstructionArgs, CreateMetadataAccountV3Cpi, 
        CreateMetadataAccountV3CpiAccounts, CreateMetadataAccountV3InstructionArgs 
    }, 
    types::{ CollectionDetails, Creator, DataV2 }
};
```
	•	anchor_lang：Solana 智能合约开发框架。
	•	anchor_spl：支持 SPL 代币和 Metaplex 元数据操作。

账户结构
```rust
#[derive(Accounts)]
pub struct CreateCollection<'info> {
    #[account(mut)]
    user: Signer<'info>,
    #[account(
        init,
        payer = user,
        mint::decimals = 0,
        mint::authority = mint_authority,
        mint::freeze_authority = mint_authority,
    )]
    mint: Account<'info, Mint>,
    #[account(seeds = [b"authority"], bump)]
    /// CHECK: 仅用于签名，不需要初始化
    pub mint_authority: UncheckedAccount<'info>,
    #[account(mut)]
    /// CHECK: 由 Metaplex 程序初始化
    metadata: UncheckedAccount<'info>,
    #[account(mut)]
    /// CHECK: 由 Metaplex 程序初始化
    master_edition: UncheckedAccount<'info>,
    #[account(
        init,
        payer = user,
        associated_token::mint = mint,
        associated_token::authority = user
    )]
    destination: Account<'info, TokenAccount>,
    system_program: Program<'info, System>,
    token_program: Program<'info, Token>,
    associated_token_program: Program<'info, AssociatedToken>,
    token_metadata_program: Program<'info, Metadata>,
}
```rust
	•	user：用户签名账户。
	•	mint：NFT 代币 mint 账户，decimals = 0（NFT）。
	•	mint_authority：NFT 代币的铸造和冻结权限。
	•	metadata：NFT 元数据账户，Metaplex 负责初始化。
	•	master_edition：NFT Master Edition 账户，Metaplex 负责初始化。
	•	destination：NFT 代币接收账户。
	•	system_program、token_program 等：Solana 相关程序。

NFT 生成流程
```rust
impl<'info> CreateCollection<'info> {
    pub fn create_collection(&mut self, bumps: &CreateCollectionBumps) -> Result<()> {
```
该函数执行 NFT 铸造、元数据和 Master Edition 账户创建。

1. 铸造 NFT
```rust
let cpi_program = self.token_program.to_account_info();
let cpi_accounts = MintTo {
    mint: self.mint.to_account_info(),
    to: self.destination.to_account_info(),
    authority: self.mint_authority.to_account_info(),
};
let cpi_ctx = CpiContext::new_with_signer(cpi_program, cpi_accounts, signer_seeds);
mint_to(cpi_ctx, 1)?;
```
	•	调用 mint_to，将 NFT 铸造到 destination 账户。

2. 创建元数据账户
```rust
let creator = vec![
    Creator {
        address: self.mint_authority.key().clone(),
        verified: true,
        share: 100,
    },
];

let metadata_account = CreateMetadataAccountV3Cpi::new(
    spl_metadata_program, 
    CreateMetadataAccountV3CpiAccounts {
        metadata,
        mint,
        mint_authority: authority,
        payer,
        update_authority: (authority, true),
        system_program,
        rent: None,
    },
    CreateMetadataAccountV3InstructionArgs {
        data: DataV2 {
            name: "DummyCollection".to_owned(),
            symbol: "DC".to_owned(),
            uri: "".to_owned(),
            seller_fee_basis_points: 0,
            creators: Some(creator),
            collection: None,
            uses: None,
        },
        is_mutable: true,
        collection_details: Some(CollectionDetails::V1 { size: 0 })
    }
);
metadata_account.invoke_signed(signer_seeds)?;
```
	•	设定 NFT 名称（DummyCollection）、符号（DC）。
	•	设定 creator（铸造者）。
	•	调用 CreateMetadataAccountV3Cpi 创建元数据账户。

3. 创建 Master Edition 账户
```rust
let master_edition_account = CreateMasterEditionV3Cpi::new(
    spl_metadata_program,
    CreateMasterEditionV3CpiAccounts {
        edition: master_edition,
        update_authority: authority,
        mint_authority: authority,
        mint,
        payer,
        metadata,
        token_program: spl_token_program,
        system_program,
        rent: None,
    },
    CreateMasterEditionV3InstructionArgs {
        max_supply: Some(0),
    }
);
master_edition_account.invoke_signed(signer_seeds)?;
```
	•	设定 max_supply = 0，代表该 NFT 不能再铸造新版本。
	•	关联 Master Edition 账户。

总结
	1.	铸造 NFT：使用 mint_to 将 NFT 铸造到目标地址。
	2.	创建元数据：利用 Metaplex CreateMetadataAccountV3Cpi 生成 NFT 元数据账户。
	3.	创建 Master Edition：使用 CreateMasterEditionV3Cpi 设定 NFT 版本管理。

该智能合约可用于创建 Solana 区块链上的 NFT 集合，确保其在 Metaplex 生态系统中完整可用。



# MintNFT 智能合约解析

## **概述**
该 Rust 代码基于 **Solana Anchor 框架**，用于 **铸造 NFT（Non-Fungible Token）**，并将其与 **特定集合（Collection）** 关联。

## **关键模块**
- **Anchor 框架** (`anchor_lang::prelude::*`)  
- **SPL 代币标准** (`anchor_spl::token::*`)  
- **Metaplex Token Metadata（NFT 标准）** (`anchor_spl::metadata::mpl_token_metadata::*`)

## **主要逻辑**

### **1. 账户定义（Accounts 结构体）**
```rust
#[derive(Accounts)]
pub struct MintNFT<'info> { ... }
```

该结构体定义了铸造 NFT 需要的 **所有账户**：
- `owner`（签名者）：NFT 创建者
- `mint`（NFT 代币）：创建的 NFT 代币
- `destination`（目标账户）：存放 NFT 的 TokenAccount
- `metadata`（NFT 元数据账户）：存储 NFT 的元数据
- `master_edition`（NFT 主版账户）：控制 NFT 供应
- `mint_authority`（PDA 权限）：NFT 的授权账户（PDA 计算生成）
- `collection_mint`（集合代币）：NFT 归属的集合
- `system_program`、`token_program`、`associated_token_program`、`token_metadata_program`（Solana 程序）


### **2. `mint_nft` 方法（NFT 铸造流程）**
```rust
pub fn mint_nft(&mut self, bumps: &MintNFTBumps) -> Result<()> { ... }
```
**主要步骤：**
#### **（1）PDA 计算和签名**
```rust
let seeds = &[ &b"authority"[..], &[bumps.mint_authority] ];
let signer_seeds = &[&seeds[..]];
```
**目的**：确保 `mint_authority` PDA 可计算，**用于签名 `mint_to` 交易**。

#### **（2）铸造 NFT 代币**
```rust
let cpi_accounts = MintTo {
    mint: self.mint.to_account_info(),
    to: self.destination.to_account_info(),
    authority: self.mint_authority.to_account_info(),
};
let cpi_ctx = CpiContext::new_with_signer(cpi_program, cpi_accounts, signer_seeds);
mint_to(cpi_ctx, 1)?;
```
**作用**：使用 `mint_to` 将 **1 个 NFT 代币** 铸造到 `destination` 账户。

#### **（3）创建 NFT 元数据账户**
```rust
let metadata_account = CreateMetadataAccountV3Cpi::new(...);
metadata_account.invoke_signed(signer_seeds)?;
```
- **设置 NFT 元数据**（`name`、`symbol`、`uri`、`creator` 等）
- **与 `collection_mint` 关联（未验证）**

#### **（4）创建主版账户（Master Edition）**
```rust
let master_edition_account = CreateMasterEditionV3Cpi::new(...);
master_edition_account.invoke_signed(signer_seeds)?;
```
**作用**：
- **控制 NFT 供应量**
- **确保 NFT 不可分割**
- **实现 `Metaplex` 兼容性**

## **总结**
该智能合约基于 **Solana Anchor + Metaplex**，
- **铸造 NFT 并存入 `owner` 账户**
- **创建 NFT 的元数据和主版账户**
- **支持 NFT 归属集合**

🔹 **适用于 Solana NFT 项目，如艺术品、数字藏品等。**



# VerifyCollectionMint 智能合约解析

## **概述**
该 **Rust 智能合约** 基于 **Solana Anchor 框架**，用于 **验证 NFT 是否属于特定集合（Collection）**，确保 NFT 归属权的合法性。

## **关键模块**
- **Anchor 框架** (`anchor_lang::prelude::*`)
- **Metaplex Token Metadata（NFT 标准）** (`anchor_spl::metadata::*`)
- **SPL 代币标准** (`anchor_spl::token::*`)
- **Solana 系统程序** (`anchor_lang::solana_program::sysvar::instructions::ID`)

## **主要逻辑**
### **1. 账户定义（Accounts 结构体）**
```rust
#[derive(Accounts)]
pub struct VerifyCollectionMint<'info> { ... }
```
该结构体定义了 **验证 NFT 所需的所有账户**：
- `authority`（签名者）：验证操作的执行者
- `metadata`（NFT 元数据账户）：NFT 对应的元数据
- `mint`（NFT 代币）：NFT 代币本身
- `mint_authority`（PDA 权限）：NFT 的授权账户（PDA 计算生成）
- `collection_mint`（集合的 Mint 账户）：集合 NFT 的 mint 账户
- `collection_metadata`（集合元数据账户）：存储集合信息的元数据账户
- `collection_master_edition`（集合主版账户）：控制集合 NFT 供应
- `system_program`（系统程序）：Solana 基础程序
- `sysvar_instruction`（系统指令账户）：用于指令验证
- `token_metadata_program`（Metaplex 代币元数据程序）

### **2. `verify_collection` 方法（验证 NFT 归属集合）**
```rust
pub fn verify_collection(&mut self, bumps: &VerifyCollectionMintBumps) -> Result<()> { ... }
```
**主要步骤：**

#### **（1）PDA 计算和签名**
```rust
let seeds = &[ &b"authority"[..], &[bumps.mint_authority] ];
let signer_seeds = &[&seeds[..]];
```
**目的**：
- 生成 `mint_authority` PDA 账户，确保其能够用于 **签名 `verify_collection` 交易**。

#### **（2）调用 `VerifyCollectionV1Cpi` 进行集合验证**
```rust
let verify_collection = VerifyCollectionV1Cpi::new(
    spl_metadata_program,
    VerifyCollectionV1CpiAccounts {
        authority,
        delegate_record: None,
        metadata,
        collection_mint,
        collection_metadata: Some(collection_metadata),
        collection_master_edition: Some(collection_master_edition),
        system_program,
        sysvar_instructions,
    });
verify_collection.invoke_signed(signer_seeds)?;
```
**作用**：
- 调用 **Metaplex 的 `VerifyCollectionV1Cpi` CPI 方法**
- **验证 NFT 是否属于集合**（`collection_mint` 是否匹配 `metadata` 关联的集合）
- 确保 `metadata` 和 `collection_metadata` 之间的关系有效

### **3. 交易完成后日志输出**
```rust
msg!("Collection Verified!");
```
- **验证成功后，输出确认消息**

## **总结**
该合约基于 **Solana Anchor + Metaplex**，用于 **验证 NFT 是否属于特定集合**，主要特性包括：
- **检查 NFT 是否正确归属于集合**
- **确保 `metadata` 与 `collection_metadata` 的有效性**
- **使用 PDA 账户签名验证**

🔹 **适用于 Solana NFT 项目，确保 NFT 归属的合法性，如数字藏品、游戏资产等。**

