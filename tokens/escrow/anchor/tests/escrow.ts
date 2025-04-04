import { randomBytes } from 'node:crypto';
import * as anchor from '@coral-xyz/anchor';
import { BN, type Program } from '@coral-xyz/anchor';
import { confirmTransaction, createAccountsMintsAndTokenAccounts, makeKeypairs } from '@solana-developers/helpers';
import { TOKEN_2022_PROGRAM_ID, type TOKEN_PROGRAM_ID, getAssociatedTokenAddressSync } from '@solana/spl-token';
import * as splToken from '@solana/spl-token';
import { ConfirmOptions, Keypair, LAMPORTS_PER_SOL, PublicKey, SYSVAR_RENT_PUBKEY } from '@solana/web3.js';
import { assert } from 'chai';
import type { Escrow } from '../target/types/escrow';

// Work on both Token Program and new Token Extensions Program
const TOKEN_PROGRAM: typeof TOKEN_2022_PROGRAM_ID | typeof TOKEN_PROGRAM_ID = TOKEN_2022_PROGRAM_ID;

const SECONDS = 1000;

// Tests must complete within half this time otherwise
// they are marked as slow. Since Anchor involves a little
// network IO, these tests usually take about 15 seconds.
const ANCHOR_SLOW_TEST_THRESHOLD = 40 * SECONDS;

const getRandomBigNumber = (size = 8) => {
  return new BN(randomBytes(size));
};

describe('escrow', async () => {
  // Use the cluster and the keypair from Anchor.toml
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // See https://github.com/coral-xyz/anchor/issues/3122
  const user = (provider.wallet as anchor.Wallet).payer;
  const payer = user;

  const connection = provider.connection;

  const program = anchor.workspace.Escrow as Program<Escrow>;

  // We're going to reuse these accounts across multiple tests
  const accounts: Record<string, PublicKey> = {
    tokenProgram: TOKEN_PROGRAM,
  };

  let alice: anchor.web3.Keypair;
  let bob: anchor.web3.Keypair;
  let tokenMintA: anchor.web3.Keypair;
  let tokenMintB: anchor.web3.Keypair;

  [alice, bob, tokenMintA, tokenMintB] = makeKeypairs(4);

  const tokenAOfferedAmount = new BN(1_000_000);
  const tokenBWantedAmount = new BN(1_000_000);
  const baseAmount = new BN(1_000_000_000);

  before('Creates Alice and Bob accounts, 2 token mints, and associated token accounts for both tokens for both users', async () => {
    try {
      // Alice will be the maker (creator) of the offer
      // Bob will be the taker (acceptor) of the offer
      alice = anchor.web3.Keypair.generate();
      bob = anchor.web3.Keypair.generate();

      await provider.connection.requestAirdrop(alice.publicKey, 1 * LAMPORTS_PER_SOL);
      await provider.connection.requestAirdrop(bob.publicKey, 1 * LAMPORTS_PER_SOL);
      console.log('alice:', alice.publicKey.toString());
      console.log('bob:', bob.publicKey.toString());
      // tokenMintA represents the token Alice is offering
      // tokenMintB represents the token Alice wants in return
      tokenMintA = Keypair.generate();
      tokenMintB = Keypair.generate();
      console.log('tokenMintA:', tokenMintA.publicKey.toString());
      console.log('tokenMintB:', tokenMintB.publicKey.toString());

      // 自定义确认选项（更快的确认）
      const confirmOptions: ConfirmOptions = {
        commitment: 'confirmed', // 等待交易最终确认
        preflightCommitment: 'processed', // 允许更快提交
        skipPreflight: true, // 跳过前置检查（加快速度）
      };

      await splToken.createMint(
        provider.connection,
        payer,
        provider.wallet.publicKey,
        provider.wallet.publicKey,
        6,
        tokenMintA,
        confirmOptions,
        TOKEN_PROGRAM,
      );
      let info = await connection.getAccountInfo(tokenMintA.publicKey);
      console.log('Owner (tokenMintA token program):', info.owner.toString());

      await splToken.createMint(
        provider.connection,
        payer,
        provider.wallet.publicKey,
        provider.wallet.publicKey,
        6,
        tokenMintB,
        confirmOptions,
        TOKEN_PROGRAM,
      );
      info = await connection.getAccountInfo(tokenMintA.publicKey);
      console.log('Owner (tokenMintB token program):', info.owner.toString());
      // aliceTokenAccountA is Alice's account for tokenA (the token she's offering)
      // aliceTokenAccountB is Alice's account for tokenB (the token she wants)
      const aliceTokenAccountA = await splToken.createAssociatedTokenAccount(
        provider.connection,
        payer,
        tokenMintA.publicKey,
        alice.publicKey,
        confirmOptions,
        TOKEN_PROGRAM,
      );
      console.log('aliceTokenAccountA:', aliceTokenAccountA);

      await splToken.mintTo(
        provider.connection,
        payer,
        tokenMintA.publicKey,
        aliceTokenAccountA,
        provider.wallet.publicKey,
        1_000_000_000,
        [],
        confirmOptions,
        TOKEN_PROGRAM,
      );
      const aliceTokenBalance = await connection.getTokenAccountBalance(aliceTokenAccountA);
      console.log('aliceTokenAccountA Balance:', aliceTokenBalance.value.amount);

      const aliceTokenAccountB = await splToken.createAssociatedTokenAccount(
        provider.connection,
        payer,
        tokenMintB.publicKey,
        alice.publicKey,
        confirmOptions,
        TOKEN_PROGRAM,
      );
      console.log('aliceTokenAccountB:', aliceTokenAccountB);

      // bobTokenAccountA is Bob's account for tokenA (the token Alice is offering)
      // bobTokenAccountB is Bob's account for tokenB (the token Alice wants)
      const bobTokenAccountA = await splToken.createAssociatedTokenAccount(
        provider.connection,
        payer,
        tokenMintA.publicKey,
        bob.publicKey,
        confirmOptions,
        TOKEN_PROGRAM,
      );
      console.log('bobTokenAccountA:', bobTokenAccountA);

      const bobTokenAccountB = await splToken.createAssociatedTokenAccount(
        provider.connection,
        payer,
        tokenMintB.publicKey,
        bob.publicKey,
        confirmOptions,
        TOKEN_PROGRAM,
      );
      console.log('bobTokenAccountB:', bobTokenAccountB);

      await splToken.mintTo(
        provider.connection,
        payer,
        tokenMintB.publicKey,
        bobTokenAccountB,
        provider.wallet.publicKey,
        10_000_000_000,
        [],
        confirmOptions,
        TOKEN_PROGRAM,
      );
      const blobTokenBalance = await connection.getTokenAccountBalance(bobTokenAccountB);
      console.log('bobTokenAccountB Balance:', blobTokenBalance.value.amount);
      // Save the accounts for later use
      accounts.maker = alice.publicKey;
      accounts.taker = bob.publicKey;
      accounts.tokenMintA = tokenMintA.publicKey;
      accounts.makerTokenAccountA = aliceTokenAccountA;
      accounts.takerTokenAccountA = bobTokenAccountA;
      accounts.tokenMintB = tokenMintB.publicKey;
      accounts.makerTokenAccountB = aliceTokenAccountB;
      accounts.takerTokenAccountB = bobTokenAccountB;

      console.log('maker:', alice.publicKey.toString());
      console.log('taker:', bob.publicKey.toString());
    } catch (error) {
      console.log('\nError Before');
      console.log(error);
    }
  });

  it('Puts the tokens Alice offers into the vault when Alice makes an offer', async () => {
    console.log('makeOffer accounts:', accounts);
    // Pick a random ID for the offer we'll make
    const offerId = getRandomBigNumber();

    // Then determine the account addresses we'll use for the offer and the vault
    const offer = PublicKey.findProgramAddressSync(
      [Buffer.from('offer'), accounts.maker.toBuffer(), offerId.toArrayLike(Buffer, 'le', 8)],
      program.programId,
    )[0];

    const vault = getAssociatedTokenAddressSync(accounts.tokenMintA, offer, true, TOKEN_PROGRAM);

    accounts.offer = offer;
    accounts.vault = vault;
    console.log('offer:', offer.toString());
    console.log('vault:', vault.toString());
    try {
      const transactionSignature = await program.methods
        .makeOffer(offerId, tokenAOfferedAmount, tokenBWantedAmount)
        .accounts({ ...accounts })
        .signers([alice])
        .rpc();

      const tx = await confirmTransaction(connection, transactionSignature);
      console.log('Your transaction signature', tx);
    } catch (error) {
      console.log('\nError makeOffer');
      console.log(error);
    }
    // console.log('Your transaction signature', tx);
    // Check our vault contains the tokens offered
    const vaultBalanceResponse = await connection.getTokenAccountBalance(vault);
    const vaultBalance = new BN(vaultBalanceResponse.value.amount);
    assert(vaultBalance.eq(tokenAOfferedAmount));

    // Check our Offer account contains the correct data
    const offerAccount = await program.account.offer.fetch(offer);

    assert(offerAccount.maker.equals(alice.publicKey));
    assert(offerAccount.tokenMintA.equals(accounts.tokenMintA));
    assert(offerAccount.tokenMintB.equals(accounts.tokenMintB));
    assert(offerAccount.tokenBWantedAmount.eq(tokenBWantedAmount));
    console.log('Offer Account:', offerAccount);
  }).slow(ANCHOR_SLOW_TEST_THRESHOLD);

  it("Puts the tokens from the vault into Bob's account, and gives Alice Bob's tokens, when Bob takes an offer", async () => {
    console.log('takeOffer  start');
    console.log('takeOffer accounts:', accounts);
    try {
      const transactionSignature = await program.methods
        .takeOffer()
        .accounts({ ...accounts })
        .signers([bob])
        .rpc();

      const tx = await confirmTransaction(connection, transactionSignature);
      console.log('Your transaction signature', tx);
    } catch (error) {
      console.log('\nError takeOffer');
      console.log(error);
    }
    // Check the offered tokens are now in Bob's account
    // (note: there is no before balance as Bob didn't have any offered tokens before the transaction)
    const bobTokenAccountBalanceAfterResponse = await connection.getTokenAccountBalance(accounts.takerTokenAccountA);
    const bobTokenAccountBalanceAfter = new BN(bobTokenAccountBalanceAfterResponse.value.amount);
    assert(bobTokenAccountBalanceAfter.eq(tokenAOfferedAmount));

    // Check the wanted tokens are now in Alice's account
    // (note: there is no before balance as Alice didn't have any wanted tokens before the transaction)
    const aliceTokenAccountBalanceAfterResponse = await connection.getTokenAccountBalance(accounts.makerTokenAccountB);
    const aliceTokenAccountBalanceAfter = new BN(aliceTokenAccountBalanceAfterResponse.value.amount);
    assert(aliceTokenAccountBalanceAfter.eq(tokenBWantedAmount));
  }).slow(ANCHOR_SLOW_TEST_THRESHOLD);
});
