
```rust
  escrow
tokenMintA: 3K5hVwkFaw9xi92CFgTyjosqmGutVUd7sV4eVfoNhqwM
tokenMintB: 2tvhdZDojbGuQdek65KDU9Wi3XsmmAcgPQ4WPeAuVACX
aliceTokenAccountA: 5Dt2tcmMCKZWAFwSdSY8re17tmsRqsvokA1M1AJm3HhU
aliceTokenAccountB: 4yCXUwn7wQCLdtGrTuubUVJ4MkP2DLKRmTrjgmFgeXKy
bobTokenAccountA: FitWGaHLTB9v3qFHgzQ8c9PrPzy9Q7YPDADrxrwaifxU
bobTokenAccountB: 9CtqQBRSvHaVd7teGgAFJU3mXnwoiEkZCUqKXGpwhL31
maker: 2tayb5zPn8q3WN5ZvMcoGNFyDJnpfpsgq4cmJ4u5Nb4x
taker: GyWkRCXaTeeDe6rtEStR5v1D78aUQ3ZmidxshBZNA8Ha
makeOffer accounts: {
  tokenProgram: PublicKey [PublicKey(TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb)] {
    _bn: <BN: 6ddf6e1ee758fde18425dbce46ccddab61afc4d83b90d27febdf928d8a18bfc>
  },
  maker: PublicKey [PublicKey(2tayb5zPn8q3WN5ZvMcoGNFyDJnpfpsgq4cmJ4u5Nb4x)] {
    _bn: <BN: 1c12b97e00f7c9d5bc993165fe18965391c19aa6fe2a35679410ef170d2cd8f5>
  },
  taker: PublicKey [PublicKey(GyWkRCXaTeeDe6rtEStR5v1D78aUQ3ZmidxshBZNA8Ha)] {
    _bn: <BN: ed59774d36b20fab0aaa054957a3bf7fd86a5f6ffdf9ea38175940306db013f5>
  },
  tokenMintA: PublicKey [PublicKey(3K5hVwkFaw9xi92CFgTyjosqmGutVUd7sV4eVfoNhqwM)] {
    _bn: <BN: 225924087f2957d24a54516a2e952250f6359ef548c584986feb676d89d8d4e0>
  },
  makerTokenAccountA: PublicKey [PublicKey(5Dt2tcmMCKZWAFwSdSY8re17tmsRqsvokA1M1AJm3HhU)] {
    _bn: <BN: 3ebb6b8e732510c90d1b2550a83abd3353afbc28ce6b14ccee649f632137065b>
  },
  takerTokenAccountA: PublicKey [PublicKey(FitWGaHLTB9v3qFHgzQ8c9PrPzy9Q7YPDADrxrwaifxU)] {
    _bn: <BN: dabeaaa709e7b10a4768a4af740ce84ca60ad65b5a6f04ccbf7acfe722ff8fe1>
  },
  tokenMintB: PublicKey [PublicKey(2tvhdZDojbGuQdek65KDU9Wi3XsmmAcgPQ4WPeAuVACX)] {
    _bn: <BN: 1c29070e5b66d99ec705bf6e289590366c91210c019bd9089db715be1bab7460>
  },
  makerTokenAccountB: PublicKey [PublicKey(4yCXUwn7wQCLdtGrTuubUVJ4MkP2DLKRmTrjgmFgeXKy)] {
    _bn: <BN: 3af89e39971a1bb6a3dccc84dcbb6e38eb911b98bf61c2923988fcd342535afc>
  },
  takerTokenAccountB: PublicKey [PublicKey(9CtqQBRSvHaVd7teGgAFJU3mXnwoiEkZCUqKXGpwhL31)] {
    _bn: <BN: 79e97e65c3ff00940a3a2c736c579b850de30006cb6b31acd518acbc3ecc78e0>
  }
}
offer: 9CkEabwAW1S4LWz2GNX6cVzRXRvkMZXnwDwt8RSvPZPY
vault: CR19uSkfo1ywqpCZxoiubeGHELBAmi5Ey4YkJNFBWAWv
Your transaction signature 51y1YseWAuKZc3WFEG6howsamu5CoMWehGXgrcs2ukzt3zHppGos55oivXVtctTJZ2Qm7BuuUSPRQLCRVaDHUpeE
Offer Account: {
  id: <BN: 369184ed590ce0c7>,
  maker: PublicKey [PublicKey(2tayb5zPn8q3WN5ZvMcoGNFyDJnpfpsgq4cmJ4u5Nb4x)] {
    _bn: <BN: 1c12b97e00f7c9d5bc993165fe18965391c19aa6fe2a35679410ef170d2cd8f5>
  },
  tokenMintA: PublicKey [PublicKey(3K5hVwkFaw9xi92CFgTyjosqmGutVUd7sV4eVfoNhqwM)] {
    _bn: <BN: 225924087f2957d24a54516a2e952250f6359ef548c584986feb676d89d8d4e0>
  },
  tokenMintB: PublicKey [PublicKey(2tvhdZDojbGuQdek65KDU9Wi3XsmmAcgPQ4WPeAuVACX)] {
    _bn: <BN: 1c29070e5b66d99ec705bf6e289590366c91210c019bd9089db715be1bab7460>
  },
  tokenBWantedAmount: <BN: f4240>,
  bump: 255
}
    ✔ Puts the tokens Alice offers into the vault when Alice makes an offer
takeOffer  start
takeOffer accounts: {
  tokenProgram: PublicKey [PublicKey(TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb)] {
    _bn: <BN: 6ddf6e1ee758fde18425dbce46ccddab61afc4d83b90d27febdf928d8a18bfc>
  },
  maker: PublicKey [PublicKey(2tayb5zPn8q3WN5ZvMcoGNFyDJnpfpsgq4cmJ4u5Nb4x)] {
    _bn: <BN: 1c12b97e00f7c9d5bc993165fe18965391c19aa6fe2a35679410ef170d2cd8f5>
  },
  taker: PublicKey [PublicKey(GyWkRCXaTeeDe6rtEStR5v1D78aUQ3ZmidxshBZNA8Ha)] {
    _bn: <BN: ed59774d36b20fab0aaa054957a3bf7fd86a5f6ffdf9ea38175940306db013f5>
  },
  tokenMintA: PublicKey [PublicKey(3K5hVwkFaw9xi92CFgTyjosqmGutVUd7sV4eVfoNhqwM)] {
    _bn: <BN: 225924087f2957d24a54516a2e952250f6359ef548c584986feb676d89d8d4e0>
  },
  makerTokenAccountA: PublicKey [PublicKey(5Dt2tcmMCKZWAFwSdSY8re17tmsRqsvokA1M1AJm3HhU)] {
    _bn: <BN: 3ebb6b8e732510c90d1b2550a83abd3353afbc28ce6b14ccee649f632137065b>
  },
  takerTokenAccountA: PublicKey [PublicKey(FitWGaHLTB9v3qFHgzQ8c9PrPzy9Q7YPDADrxrwaifxU)] {
    _bn: <BN: dabeaaa709e7b10a4768a4af740ce84ca60ad65b5a6f04ccbf7acfe722ff8fe1>
  },
  tokenMintB: PublicKey [PublicKey(2tvhdZDojbGuQdek65KDU9Wi3XsmmAcgPQ4WPeAuVACX)] {
    _bn: <BN: 1c29070e5b66d99ec705bf6e289590366c91210c019bd9089db715be1bab7460>
  },
  makerTokenAccountB: PublicKey [PublicKey(4yCXUwn7wQCLdtGrTuubUVJ4MkP2DLKRmTrjgmFgeXKy)] {
    _bn: <BN: 3af89e39971a1bb6a3dccc84dcbb6e38eb911b98bf61c2923988fcd342535afc>
  },
  takerTokenAccountB: PublicKey [PublicKey(9CtqQBRSvHaVd7teGgAFJU3mXnwoiEkZCUqKXGpwhL31)] {
    _bn: <BN: 79e97e65c3ff00940a3a2c736c579b850de30006cb6b31acd518acbc3ecc78e0>
  },
  offer: PublicKey [PublicKey(9CkEabwAW1S4LWz2GNX6cVzRXRvkMZXnwDwt8RSvPZPY)] {
    _bn: <BN: 79dfc4f06c979a31f9c51eadc09f5489f1e0e1f2316538656c7512624c5af87b>
  },
  vault: PublicKey [PublicKey(CR19uSkfo1ywqpCZxoiubeGHELBAmi5Ey4YkJNFBWAWv)] {
    _bn: <BN: a996ab504fdffbee97fa81ab897e4f760046dde2f9c3bc6487f09b014a6007b3>
  }
}

Error takeOffer
SendTransactionError: Simulation failed. 
Message: Transaction simulation failed: Error processing Instruction 0: Program failed to complete. 
Logs: 
[
  "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 15865 of 167282 compute units",
  "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
  "Program log: taker:GyWkRCXaTeeDe6rtEStR5v1D78aUQ3ZmidxshBZNA8Ha",
  "Program log: Offer struct size: 113",
  "Program log: offer token_b_wanted_amount tokenBWantedAmount Address: 0x200002d40",
  "Program log: offer signer: 9CkEabwAW1S4LWz2GNX6cVzRXRvkMZXnwDwt8RSvPZPY",
  "Program log: offer token_b_wanted_amount:954870143",
  "Program log: taker_token_account_b:9CtqQBRSvHaVd7teGgAFJU3mXnwoiEkZCUqKXGpwhL31",
  "Program 3EWWCncBgfnppsVEi96UGd4Arzk5WCkLiZqht6YKNBk7 consumed 95430 of 200000 compute units",
  "Program 3EWWCncBgfnppsVEi96UGd4Arzk5WCkLiZqht6YKNBk7 failed: Access violation in unknown section at address 0xf4260 of size 8"
]. 
Catch the `SendTransactionError` and call `getLogs()` on it for full details.
    at Connection.sendEncodedTransaction (/System/Volumes/Data/resource/github/program-examples/tokens/escrow/anchor/node_modules/@solana/web3.js/src/connection.ts:6047:13)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Connection.sendRawTransaction (/System/Volumes/Data/resource/github/program-examples/tokens/escrow/anchor/node_modules/@solana/web3.js/src/connection.ts:6003:20)
    at sendAndConfirmRawTransaction (/System/Volumes/Data/resource/github/program-examples/tokens/escrow/anchor/node_modules/@coral-xyz/anchor/src/provider.ts:377:21)
    at AnchorProvider.sendAndConfirm (/System/Volumes/Data/resource/github/program-examples/tokens/escrow/anchor/node_modules/@coral-xyz/anchor/src/provider.ts:163:14)
    at MethodsBuilder.rpc [as _rpcFn] (/System/Volumes/Data/resource/github/program-examples/tokens/escrow/anchor/node_modules/@coral-xyz/anchor/src/program/namespace/rpc.ts:29:16) {
  signature: '',
  transactionMessage: 'Transaction simulation failed: Error processing Instruction 0: Program failed to complete',
  transactionLogs: [
    'Program 3EWWCncBgfnppsVEi96UGd4Arzk5WCkLiZqht6YKNBk7 invoke [1]',
    'Program log: Instruction: TakeOffer',
    'Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL invoke [2]',
    'Program log: Create',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb invoke [3]',
    'Program log: Instruction: GetAccountDataSize',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb consumed 928 of 184954 compute units',
    'Program return: TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb qgAAAAAAAAA=',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb success',
    'Program 11111111111111111111111111111111 invoke [3]',
    'Program 11111111111111111111111111111111 success',
    'Program log: Initialize the associated token account',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb invoke [3]',
    'Program log: Instruction: InitializeImmutableOwner',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb consumed 487 of 179096 compute units',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb success',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb invoke [3]',
    'Program log: Instruction: InitializeAccount3',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb consumed 1440 of 176222 compute units',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb success',
    'Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 15764 of 190263 compute units',
    'Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success',
    'Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL invoke [2]',
    'Program log: Create',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb invoke [3]',
    'Program log: Instruction: GetAccountDataSize',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb consumed 928 of 161895 compute units',
    'Program return: TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb qgAAAAAAAAA=',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb success',
    'Program 11111111111111111111111111111111 invoke [3]',
    'Program 11111111111111111111111111111111 success',
    'Program log: Initialize the associated token account',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb invoke [3]',
    'Program log: Instruction: InitializeImmutableOwner',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb consumed 487 of 156037 compute units',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb success',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb invoke [3]',
    'Program log: Instruction: InitializeAccount3',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb consumed 1440 of 153161 compute units',
    'Program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb success',
    'Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 15865 of 167282 compute units',
    'Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success',
    'Program log: taker:GyWkRCXaTeeDe6rtEStR5v1D78aUQ3ZmidxshBZNA8Ha',
    'Program log: Offer struct size: 113',
    'Program log: offer token_b_wanted_amount tokenBWantedAmount Address: 0x200002d40',
    'Program log: offer signer: 9CkEabwAW1S4LWz2GNX6cVzRXRvkMZXnwDwt8RSvPZPY',
    'Program log: offer token_b_wanted_amount:954870143',
    'Program log: taker_token_account_b:9CtqQBRSvHaVd7teGgAFJU3mXnwoiEkZCUqKXGpwhL31',
    'Program 3EWWCncBgfnppsVEi96UGd4Arzk5WCkLiZqht6YKNBk7 consumed 95430 of 200000 compute units',
    'Program 3EWWCncBgfnppsVEi96UGd4Arzk5WCkLiZqht6YKNBk7 failed: Access violation in unknown section at address 0xf4260 of size 8'
  ],
  programErrorStack: ProgramErrorStack {
    stack: [
      [PublicKey [PublicKey(3EWWCncBgfnppsVEi96UGd4Arzk5WCkLiZqht6YKNBk7)]]
    ]
  }
}
    1) Puts the tokens from the vault into Bob's account, and gives Alice Bob's tokens, when Bob takes an offer


  1 passing (15s)
  1 failing

  1) escrow
       Puts the tokens from the vault into Bob's account, and gives Alice Bob's tokens, when Bob takes an offer:
     SolanaJSONRPCError: failed to get token account balance: Invalid param: could not find account
      at Connection.getTokenAccountBalance (node_modules/@solana/web3.js/src/connection.ts:3431:13)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)



  1) escrow
       "before all" hook: Creates Alice and Bob accounts, 2 token mints, and associated token accounts for both tokens for both users for "Puts the tokens Alice offers into the vault when Alice makes an offer":
     SolanaJSONRPCError: failed to get token account balance: Invalid param: could not find account
      at Connection.getTokenAccountBalance (node_modules/@solana/web3.js/src/connection.ts:3431:13)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)


```

```ts
 before('Creates Alice and Bob accounts, 2 token mints, and associated token accounts for both tokens for both users', async () => {
    const usersMintsAndTokenAccounts = await createAccountsMintsAndTokenAccounts(
      [
        // Alice's token balances
        [
          // 1_000_000_000 of token A
          1_000_000_000,
          // 0 of token B
          0,
        ],
        // Bob's token balances
        [
          // 0 of token A
          0,
          // 1_000_000_000 of token B
          1_000_000_000,
        ],
      ],
      1 * LAMPORTS_PER_SOL,
      connection,
      payer,
    );

    // Alice will be the maker (creator) of the offer
    // Bob will be the taker (acceptor) of the offer
    const users = usersMintsAndTokenAccounts.users;
    alice = users[0];
    bob = users[1];
    // console.log('alice:', alice.publicKey.toBase58);
    // console.log('bob:', bob.publicKey.toBase58);
    // tokenMintA represents the token Alice is offering
    // tokenMintB represents the token Alice wants in return
    const mints = usersMintsAndTokenAccounts.mints;
    tokenMintA = mints[0];
    tokenMintB = mints[1];
    console.log('tokenMintA:', tokenMintA.publicKey.toString());
    console.log('tokenMintB:', tokenMintB.publicKey.toString());
    const tokenAccounts = usersMintsAndTokenAccounts.tokenAccounts;

    // aliceTokenAccountA is Alice's account for tokenA (the token she's offering)
    // aliceTokenAccountB is Alice's account for tokenB (the token she wants)
    const aliceTokenAccountA = tokenAccounts[0][0];
    const aliceTokenAccountB = tokenAccounts[0][1];
    console.log('aliceTokenAccountA:', aliceTokenAccountA.toString());
    console.log('aliceTokenAccountB:', aliceTokenAccountB.toString());
    const aliceTokenBalance = await connection.getTokenAccountBalance(aliceTokenAccountB);
    console.log("Alice Token Account B Balance:", aliceTokenBalance.value.amount);
    // const aliceTokenAccountInfo = await connection.getParsedAccountInfo(aliceTokenAccountB);
    // console.log("Alice Token Account B Owner:", aliceTokenAccountInfo);
    // bobTokenAccountA is Bob's account for tokenA (the token Alice is offering)
    // bobTokenAccountB is Bob's account for tokenB (the token Alice wants)
    const bobTokenAccountA = tokenAccounts[1][0];
    const bobTokenAccountB = tokenAccounts[1][1];
    console.log('bobTokenAccountA:', bobTokenAccountA.toString());
    console.log('bobTokenAccountB:', bobTokenAccountB.toString());

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
  });
```


  1) escrow
       "before all" hook: Creates Alice and Bob accounts, 2 token mints, and associated token accounts for both tokens for both users for "Puts the tokens Alice offers into the vault when Alice makes an offer":
     SolanaJSONRPCError: failed to get token account balance: Invalid param: could not find account
      at Connection.getTokenAccountBalance (node_modules/@solana/web3.js/src/connection.ts:3431:13)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)

aliceTokenAccountB的创建有问题，参照，anchor-usage-escorw中创建代币的方式；






  escrow
alice: BL7qBDU3i8aV6jN5Kbc4iUhxptdYeq9GhCZrNeTzAXUC
bob: HcE34horBaarVYQzkXYiwFVzw4FuKUDNy21mKfQKzWq7
tokenMintA: JHT88Sum16sdDgh3C1wSYzcxDYzRxAvx8uk6pM8d5SE
tokenMintB: 5CMez8u6FjpbKSEwiWPYgKeHA5W5d4FUsg3N1tUubzSu
aliceTokenAccountA ::  PublicKey [PublicKey(EyofKuoZZq9t4Z3nmuvr9ZPsgbgCN5nqZNw42ES3x2Zs)] {
  _bn: <BN: cfb5370247d75c15a437932c88d27a933fb90783840a1443d9244a38eb6bb8ae>
}
aliceTokenAccountA Balance: 1000000000
aliceTokenAccountB ::  PublicKey [PublicKey(3YN43BDv5Kfn2t196k5mHcmZckqCUEeqCkjLFeK6MgVd)] {
  _bn: <BN: 25c02ed43afd5819e70e30848ee6599c41b8828c007ea7c288debd20e17bade8>
}
bobTokenAccountA ::  PublicKey [PublicKey(3KZgVVo6GXFbeVHPyfJwCVLQNUEyz4xvUv66sHa8oN9h)] {
  _bn: <BN: 2278c7e32f19bd005bda06a4ae1f0f5a905b6a68515b2eb4e93a09c736a5022c>
}
bobTokenAccountB ::  PublicKey [PublicKey(64rNqNiy5GmjGwPF9vS4ueRzTgBurzWqJvDbsSZSaxPw)] {
  _bn: <BN: 4b4701d710e6bb5ae1a7d2eb0850c52c71a7d73ae67e8704baff6352a1ba50e6>
}
bobTokenAccountB Balance: 10000000000
maker: BL7qBDU3i8aV6jN5Kbc4iUhxptdYeq9GhCZrNeTzAXUC
taker: HcE34horBaarVYQzkXYiwFVzw4FuKUDNy21mKfQKzWq7
makeOffer accounts: {
  tokenProgram: PublicKey [PublicKey(TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb)] {
    _bn: <BN: 6ddf6e1ee758fde18425dbce46ccddab61afc4d83b90d27febdf928d8a18bfc>
  },
  maker: PublicKey [PublicKey(BL7qBDU3i8aV6jN5Kbc4iUhxptdYeq9GhCZrNeTzAXUC)] {
    _bn: <BN: 997aa0c79aa8f4d5e9c56f8c59b4944c3c5a3d5f500cb089c99e77cf9f30a759>
  },
  taker: PublicKey [PublicKey(HcE34horBaarVYQzkXYiwFVzw4FuKUDNy21mKfQKzWq7)] {
    _bn: <BN: f6c10efb373e90fab7d2a482f51a623c2b7ff0c367d192f681d78c5b346481e2>
  },
  tokenMintA: PublicKey [PublicKey(JHT88Sum16sdDgh3C1wSYzcxDYzRxAvx8uk6pM8d5SE)] {
    _bn: <BN: 46d796a174fb77f55b6f2b310f6cd032aa2d421185c0e15b5a99b1111b54517>
  },
  makerTokenAccountA: PublicKey [PublicKey(EyofKuoZZq9t4Z3nmuvr9ZPsgbgCN5nqZNw42ES3x2Zs)] {
    _bn: <BN: cfb5370247d75c15a437932c88d27a933fb90783840a1443d9244a38eb6bb8ae>
  },
  takerTokenAccountA: PublicKey [PublicKey(3KZgVVo6GXFbeVHPyfJwCVLQNUEyz4xvUv66sHa8oN9h)] {
    _bn: <BN: 2278c7e32f19bd005bda06a4ae1f0f5a905b6a68515b2eb4e93a09c736a5022c>
  },
  tokenMintB: PublicKey [PublicKey(5CMez8u6FjpbKSEwiWPYgKeHA5W5d4FUsg3N1tUubzSu)] {
    _bn: <BN: 3e577dbecf90b569cd0c92af06e8179b2eebd0f7c2e1cc580012cf840723bf12>
  },
  makerTokenAccountB: PublicKey [PublicKey(3YN43BDv5Kfn2t196k5mHcmZckqCUEeqCkjLFeK6MgVd)] {
    _bn: <BN: 25c02ed43afd5819e70e30848ee6599c41b8828c007ea7c288debd20e17bade8>
  },
  takerTokenAccountB: PublicKey [PublicKey(64rNqNiy5GmjGwPF9vS4ueRzTgBurzWqJvDbsSZSaxPw)] {
    _bn: <BN: 4b4701d710e6bb5ae1a7d2eb0850c52c71a7d73ae67e8704baff6352a1ba50e6>
  }
}
offer: Gz8CrzDfQ5oUfVDKeKZmQgu5S1ZLNFQK1VuMkyjFhBMi
vault: 9nKfh9vKPmZQGg1wkvTrVAseyUhRUJin8ACCvD1LNgHx

