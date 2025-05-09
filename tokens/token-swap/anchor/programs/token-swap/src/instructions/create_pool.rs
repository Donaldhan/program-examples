use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{Mint, Token, TokenAccount},
};

use crate::{
    constants::{AUTHORITY_SEED, LIQUIDITY_SEED},
    state::{Amm, Pool},
};
use std::mem::size_of;
pub fn create_pool(ctx: Context<CreatePool>) -> Result<()> {
    // msg!("Pool size = {}", size_of::<Pool>()); // 这个不包含 discriminator
    // msg!("pool: {}", ctx.accounts.pool.key());
    // msg!("mint_liquidity: {}", ctx.accounts.mint_liquidity.key());
    // msg!("pool_authority: {}", ctx.accounts.pool_authority.key());
    let pool = &mut ctx.accounts.pool;
    pool.amm = ctx.accounts.amm.key();
    // msg!("amm: {}", pool.amm);
    pool.mint_a = ctx.accounts.mint_a.key();
    // msg!("mint_a: {}", pool.mint_a);
    pool.mint_b = ctx.accounts.mint_b.key();
    // msg!("mint_b: {}", pool.mint_b);

    Ok(())
}

#[derive(Accounts)]
pub struct CreatePool<'info> {
    #[account(
        seeds = [
            amm.id.as_ref()
        ],
        bump,
    )]
    pub amm: Box<Account<'info, Amm>>,

    #[account(
        init,
        payer = payer,
        space = Pool::LEN,
        seeds = [
            amm.key().as_ref(),
            mint_a.key().as_ref(),
            mint_b.key().as_ref(),
        ],
        bump,
        
    )]
    pub pool: Box<Account<'info, Pool>>,

    /// CHECK: Read only authority
    #[account(
        seeds = [
            amm.key().as_ref(),
            mint_a.key().as_ref(),
            mint_b.key().as_ref(),
            AUTHORITY_SEED,
        ],
        bump,
    )]
    pub pool_authority: AccountInfo<'info>,

    #[account(
        init,
        payer = payer,
        seeds = [
            amm.key().as_ref(),
            mint_a.key().as_ref(),
            mint_b.key().as_ref(),
            LIQUIDITY_SEED,
        ],
        bump,
        mint::decimals = 6,
        mint::authority = pool_authority,
    )]
    pub mint_liquidity: Box<Account<'info, Mint>>,

    pub mint_a: Account<'info, Mint>,
    // pub mint_a: Box<Account<'info, Mint>>,

    pub mint_b: Account<'info, Mint>,
    // pub mint_b: Box<Account<'info, Mint>>,

    #[account(
        init,
        payer = payer,
        associated_token::mint = mint_a,
        associated_token::authority = pool_authority,
    )]
    pub pool_account_a: Box<Account<'info, TokenAccount>>,

    #[account(
        init,
        payer = payer,
        associated_token::mint = mint_b,
        associated_token::authority = pool_authority,
    )]
    pub pool_account_b: Box<Account<'info, TokenAccount>>,

    /// The account paying for all rents
    #[account(mut)]
    pub payer: Signer<'info>,

    /// Solana ecosystem accounts
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
}
