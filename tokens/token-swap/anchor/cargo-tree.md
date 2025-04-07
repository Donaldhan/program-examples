eptrusttry@EPdeMacBook-Pro anchor % cargo tree
swap_example v0.1.0 (/System/Volumes/Data/resource/github/program-examples/tokens/token-swap/anchor/programs/token-swap)
├── anchor-lang v0.30.1
│   ├── anchor-attribute-access-control v0.30.1 (proc-macro)
│   │   ├── anchor-syn v0.30.1
│   │   │   ├── anyhow v1.0.97
│   │   │   ├── bs58 v0.5.1
│   │   │   ├── heck v0.3.3
│   │   │   │   └── unicode-segmentation v1.12.0
│   │   │   ├── proc-macro2 v1.0.94
│   │   │   │   └── unicode-ident v1.0.18
│   │   │   ├── quote v1.0.40
│   │   │   │   └── proc-macro2 v1.0.94 (*)
│   │   │   ├── serde v1.0.219
│   │   │   │   └── serde_derive v1.0.219 (proc-macro)
│   │   │   │       ├── proc-macro2 v1.0.94 (*)
│   │   │   │       ├── quote v1.0.40 (*)
│   │   │   │       └── syn v2.0.100
│   │   │   │           ├── proc-macro2 v1.0.94 (*)
│   │   │   │           ├── quote v1.0.40 (*)
│   │   │   │           └── unicode-ident v1.0.18
│   │   │   ├── serde_json v1.0.140
│   │   │   │   ├── itoa v1.0.15
│   │   │   │   ├── memchr v2.7.4
│   │   │   │   ├── ryu v1.0.20
│   │   │   │   └── serde v1.0.219 (*)
│   │   │   ├── sha2 v0.10.8
│   │   │   │   ├── cfg-if v1.0.0
│   │   │   │   ├── cpufeatures v0.2.17
│   │   │   │   │   └── libc v0.2.171
│   │   │   │   └── digest v0.10.7
│   │   │   │       ├── block-buffer v0.10.4
│   │   │   │       │   └── generic-array v0.14.7
│   │   │   │       │       └── typenum v1.18.0
│   │   │   │       │       [build-dependencies]
│   │   │   │       │       └── version_check v0.9.5
│   │   │   │       └── crypto-common v0.1.6
│   │   │   │           ├── generic-array v0.14.7 (*)
│   │   │   │           └── typenum v1.18.0
│   │   │   ├── syn v1.0.109
│   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   └── unicode-ident v1.0.18
│   │   │   └── thiserror v1.0.69
│   │   │       └── thiserror-impl v1.0.69 (proc-macro)
│   │   │           ├── proc-macro2 v1.0.94 (*)
│   │   │           ├── quote v1.0.40 (*)
│   │   │           └── syn v2.0.100 (*)
│   │   ├── proc-macro2 v1.0.94 (*)
│   │   ├── quote v1.0.40 (*)
│   │   └── syn v1.0.109 (*)
│   ├── anchor-attribute-account v0.30.1 (proc-macro)
│   │   ├── anchor-syn v0.30.1 (*)
│   │   ├── bs58 v0.5.1
│   │   ├── proc-macro2 v1.0.94 (*)
│   │   ├── quote v1.0.40 (*)
│   │   └── syn v1.0.109 (*)
│   ├── anchor-attribute-constant v0.30.1 (proc-macro)
│   │   ├── anchor-syn v0.30.1 (*)
│   │   ├── quote v1.0.40 (*)
│   │   └── syn v1.0.109 (*)
│   ├── anchor-attribute-error v0.30.1 (proc-macro)
│   │   ├── anchor-syn v0.30.1 (*)
│   │   ├── quote v1.0.40 (*)
│   │   └── syn v1.0.109 (*)
│   ├── anchor-attribute-event v0.30.1 (proc-macro)
│   │   ├── anchor-syn v0.30.1 (*)
│   │   ├── proc-macro2 v1.0.94 (*)
│   │   ├── quote v1.0.40 (*)
│   │   └── syn v1.0.109 (*)
│   ├── anchor-attribute-program v0.30.1 (proc-macro)
│   │   ├── anchor-lang-idl v0.1.2
│   │   │   ├── anchor-lang-idl-spec v0.1.0
│   │   │   │   ├── anyhow v1.0.97
│   │   │   │   └── serde v1.0.219 (*)
│   │   │   ├── anyhow v1.0.97
│   │   │   ├── heck v0.3.3 (*)
│   │   │   ├── serde v1.0.219 (*)
│   │   │   ├── serde_json v1.0.140 (*)
│   │   │   └── sha2 v0.10.8 (*)
│   │   ├── anchor-syn v0.30.1 (*)
│   │   ├── anyhow v1.0.97
│   │   ├── bs58 v0.5.1
│   │   ├── heck v0.3.3 (*)
│   │   ├── proc-macro2 v1.0.94 (*)
│   │   ├── quote v1.0.40 (*)
│   │   ├── serde_json v1.0.140 (*)
│   │   └── syn v1.0.109 (*)
│   ├── anchor-derive-accounts v0.30.1 (proc-macro)
│   │   ├── anchor-syn v0.30.1 (*)
│   │   ├── quote v1.0.40 (*)
│   │   └── syn v1.0.109 (*)
│   ├── anchor-derive-serde v0.30.1 (proc-macro)
│   │   ├── anchor-syn v0.30.1 (*)
│   │   ├── borsh-derive-internal v0.10.4
│   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   ├── quote v1.0.40 (*)
│   │   │   └── syn v1.0.109 (*)
│   │   ├── proc-macro2 v1.0.94 (*)
│   │   ├── quote v1.0.40 (*)
│   │   └── syn v1.0.109 (*)
│   ├── anchor-derive-space v0.30.1 (proc-macro)
│   │   ├── proc-macro2 v1.0.94 (*)
│   │   ├── quote v1.0.40 (*)
│   │   └── syn v1.0.109 (*)
│   ├── arrayref v0.3.9
│   ├── base64 v0.21.7
│   ├── bincode v1.3.3
│   │   └── serde v1.0.219
│   │       └── serde_derive v1.0.219 (proc-macro) (*)
│   ├── borsh v0.10.4
│   │   ├── borsh-derive v0.10.4 (proc-macro)
│   │   │   ├── borsh-derive-internal v0.10.4 (*)
│   │   │   ├── borsh-schema-derive-internal v0.10.4
│   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   └── syn v1.0.109 (*)
│   │   │   ├── proc-macro-crate v0.1.5
│   │   │   │   └── toml v0.5.11
│   │   │   │       └── serde v1.0.219 (*)
│   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   └── syn v1.0.109 (*)
│   │   └── hashbrown v0.13.2
│   │       └── ahash v0.8.11
│   │           ├── cfg-if v1.0.0
│   │           ├── once_cell v1.21.3
│   │           └── zerocopy v0.7.35
│   │           [build-dependencies]
│   │           └── version_check v0.9.5
│   ├── bytemuck v1.22.0
│   │   └── bytemuck_derive v1.9.3 (proc-macro)
│   │       ├── proc-macro2 v1.0.94 (*)
│   │       ├── quote v1.0.40 (*)
│   │       └── syn v2.0.100 (*)
│   ├── getrandom v0.2.15
│   │   ├── cfg-if v1.0.0
│   │   └── libc v0.2.171
│   ├── solana-program v1.18.26
│   │   ├── ark-bn254 v0.4.0
│   │   │   ├── ark-ec v0.4.2
│   │   │   │   ├── ark-ff v0.4.2
│   │   │   │   │   ├── ark-ff-asm v0.4.2 (proc-macro)
│   │   │   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   │   │   └── syn v1.0.109 (*)
│   │   │   │   │   ├── ark-ff-macros v0.4.2 (proc-macro)
│   │   │   │   │   │   ├── num-bigint v0.4.6
│   │   │   │   │   │   │   ├── num-integer v0.1.46
│   │   │   │   │   │   │   │   └── num-traits v0.2.19
│   │   │   │   │   │   │   │       [build-dependencies]
│   │   │   │   │   │   │   │       └── autocfg v1.4.0
│   │   │   │   │   │   │   └── num-traits v0.2.19 (*)
│   │   │   │   │   │   ├── num-traits v0.2.19 (*)
│   │   │   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   │   │   └── syn v1.0.109 (*)
│   │   │   │   │   ├── ark-serialize v0.4.2
│   │   │   │   │   │   ├── ark-serialize-derive v0.4.2 (proc-macro)
│   │   │   │   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   │   │   │   └── syn v1.0.109 (*)
│   │   │   │   │   │   ├── ark-std v0.4.0
│   │   │   │   │   │   │   ├── num-traits v0.2.19
│   │   │   │   │   │   │   │   [build-dependencies]
│   │   │   │   │   │   │   │   └── autocfg v1.4.0
│   │   │   │   │   │   │   └── rand v0.8.5
│   │   │   │   │   │   │       ├── libc v0.2.171
│   │   │   │   │   │   │       ├── rand_chacha v0.3.1
│   │   │   │   │   │   │       │   ├── ppv-lite86 v0.2.21
│   │   │   │   │   │   │       │   │   └── zerocopy v0.8.24
│   │   │   │   │   │   │       │   └── rand_core v0.6.4
│   │   │   │   │   │   │       │       └── getrandom v0.2.15 (*)
│   │   │   │   │   │   │       └── rand_core v0.6.4 (*)
│   │   │   │   │   │   ├── digest v0.10.7
│   │   │   │   │   │   │   ├── block-buffer v0.10.4 (*)
│   │   │   │   │   │   │   ├── crypto-common v0.1.6 (*)
│   │   │   │   │   │   │   └── subtle v2.4.1
│   │   │   │   │   │   └── num-bigint v0.4.6
│   │   │   │   │   │       ├── num-integer v0.1.46
│   │   │   │   │   │       │   └── num-traits v0.2.19 (*)
│   │   │   │   │   │       └── num-traits v0.2.19 (*)
│   │   │   │   │   ├── ark-std v0.4.0 (*)
│   │   │   │   │   ├── derivative v2.2.0 (proc-macro)
│   │   │   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   │   │   └── syn v1.0.109 (*)
│   │   │   │   │   ├── digest v0.10.7 (*)
│   │   │   │   │   ├── itertools v0.10.5
│   │   │   │   │   │   └── either v1.15.0
│   │   │   │   │   ├── num-bigint v0.4.6 (*)
│   │   │   │   │   ├── num-traits v0.2.19 (*)
│   │   │   │   │   ├── paste v1.0.15 (proc-macro)
│   │   │   │   │   └── zeroize v1.3.0
│   │   │   │   │       └── zeroize_derive v1.4.2 (proc-macro)
│   │   │   │   │           ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │           ├── quote v1.0.40 (*)
│   │   │   │   │           └── syn v2.0.100 (*)
│   │   │   │   │   [build-dependencies]
│   │   │   │   │   └── rustc_version v0.4.1
│   │   │   │   │       └── semver v1.0.26
│   │   │   │   ├── ark-poly v0.4.2
│   │   │   │   │   ├── ark-ff v0.4.2 (*)
│   │   │   │   │   ├── ark-serialize v0.4.2 (*)
│   │   │   │   │   ├── ark-std v0.4.0 (*)
│   │   │   │   │   ├── derivative v2.2.0 (proc-macro) (*)
│   │   │   │   │   └── hashbrown v0.13.2 (*)
│   │   │   │   ├── ark-serialize v0.4.2 (*)
│   │   │   │   ├── ark-std v0.4.0 (*)
│   │   │   │   ├── derivative v2.2.0 (proc-macro) (*)
│   │   │   │   ├── hashbrown v0.13.2 (*)
│   │   │   │   ├── itertools v0.10.5 (*)
│   │   │   │   ├── num-traits v0.2.19 (*)
│   │   │   │   └── zeroize v1.3.0 (*)
│   │   │   ├── ark-ff v0.4.2 (*)
│   │   │   └── ark-std v0.4.0 (*)
│   │   ├── ark-ec v0.4.2 (*)
│   │   ├── ark-ff v0.4.2 (*)
│   │   ├── ark-serialize v0.4.2 (*)
│   │   ├── base64 v0.21.7
│   │   ├── bincode v1.3.3 (*)
│   │   ├── bitflags v2.9.0
│   │   │   └── serde v1.0.219 (*)
│   │   ├── blake3 v1.8.0
│   │   │   ├── arrayref v0.3.9
│   │   │   ├── arrayvec v0.7.6
│   │   │   ├── cfg-if v1.0.0
│   │   │   ├── constant_time_eq v0.3.1
│   │   │   └── digest v0.10.7 (*)
│   │   │   [build-dependencies]
│   │   │   └── cc v1.2.17
│   │   │       ├── jobserver v0.1.32
│   │   │       │   └── libc v0.2.171
│   │   │       ├── libc v0.2.171
│   │   │       └── shlex v1.3.0
│   │   ├── borsh v0.9.3
│   │   │   ├── borsh-derive v0.9.3 (proc-macro)
│   │   │   │   ├── borsh-derive-internal v0.9.3
│   │   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   │   └── syn v1.0.109 (*)
│   │   │   │   ├── borsh-schema-derive-internal v0.9.3
│   │   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   │   └── syn v1.0.109 (*)
│   │   │   │   ├── proc-macro-crate v0.1.5 (*)
│   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   └── syn v1.0.109 (*)
│   │   │   └── hashbrown v0.11.2
│   │   │       └── ahash v0.7.8
│   │   │           ├── getrandom v0.2.15 (*)
│   │   │           └── once_cell v1.21.3
│   │   │           [build-dependencies]
│   │   │           └── version_check v0.9.5
│   │   ├── borsh v0.10.4 (*)
│   │   ├── borsh v1.5.7
│   │   │   └── borsh-derive v1.5.7 (proc-macro)
│   │   │       ├── once_cell v1.21.3
│   │   │       ├── proc-macro-crate v3.3.0
│   │   │       │   └── toml_edit v0.22.24
│   │   │       │       ├── indexmap v2.8.0
│   │   │       │       │   ├── equivalent v1.0.2
│   │   │       │       │   └── hashbrown v0.15.2
│   │   │       │       ├── toml_datetime v0.6.8
│   │   │       │       └── winnow v0.7.4
│   │   │       ├── proc-macro2 v1.0.94 (*)
│   │   │       ├── quote v1.0.40 (*)
│   │   │       └── syn v2.0.100 (*)
│   │   │   [build-dependencies]
│   │   │   └── cfg_aliases v0.2.1
│   │   ├── bs58 v0.4.0
│   │   ├── bv v0.11.1
│   │   │   └── serde v1.0.219 (*)
│   │   │   [build-dependencies]
│   │   │   └── feature-probe v0.1.1
│   │   ├── bytemuck v1.22.0 (*)
│   │   ├── curve25519-dalek v3.2.1
│   │   │   ├── byteorder v1.5.0
│   │   │   ├── digest v0.9.0
│   │   │   │   └── generic-array v0.14.7
│   │   │   │       ├── serde v1.0.219 (*)
│   │   │   │       └── typenum v1.18.0
│   │   │   │       [build-dependencies]
│   │   │   │       └── version_check v0.9.5
│   │   │   ├── rand_core v0.5.1
│   │   │   │   └── getrandom v0.1.16
│   │   │   │       ├── cfg-if v1.0.0
│   │   │   │       └── libc v0.2.171
│   │   │   ├── serde v1.0.219 (*)
│   │   │   ├── subtle v2.4.1
│   │   │   └── zeroize v1.3.0 (*)
│   │   ├── itertools v0.10.5 (*)
│   │   ├── lazy_static v1.5.0
│   │   ├── libc v0.2.171
│   │   ├── libsecp256k1 v0.6.0
│   │   │   ├── arrayref v0.3.9
│   │   │   ├── base64 v0.12.3
│   │   │   ├── digest v0.9.0 (*)
│   │   │   ├── hmac-drbg v0.3.0
│   │   │   │   ├── digest v0.9.0 (*)
│   │   │   │   ├── generic-array v0.14.7 (*)
│   │   │   │   └── hmac v0.8.1
│   │   │   │       ├── crypto-mac v0.8.0
│   │   │   │       │   ├── generic-array v0.14.7 (*)
│   │   │   │       │   └── subtle v2.4.1
│   │   │   │       └── digest v0.9.0 (*)
│   │   │   ├── libsecp256k1-core v0.2.2
│   │   │   │   ├── crunchy v0.2.3
│   │   │   │   ├── digest v0.9.0 (*)
│   │   │   │   └── subtle v2.4.1
│   │   │   ├── rand v0.7.3
│   │   │   │   ├── getrandom v0.1.16 (*)
│   │   │   │   ├── libc v0.2.171
│   │   │   │   ├── rand_chacha v0.2.2
│   │   │   │   │   ├── ppv-lite86 v0.2.21 (*)
│   │   │   │   │   └── rand_core v0.5.1 (*)
│   │   │   │   └── rand_core v0.5.1 (*)
│   │   │   ├── serde v1.0.219 (*)
│   │   │   ├── sha2 v0.9.9
│   │   │   │   ├── block-buffer v0.9.0
│   │   │   │   │   ├── block-padding v0.2.1
│   │   │   │   │   └── generic-array v0.14.7 (*)
│   │   │   │   ├── cfg-if v1.0.0
│   │   │   │   ├── cpufeatures v0.2.17 (*)
│   │   │   │   ├── digest v0.9.0 (*)
│   │   │   │   └── opaque-debug v0.3.1
│   │   │   └── typenum v1.18.0
│   │   │   [build-dependencies]
│   │   │   ├── libsecp256k1-gen-ecmult v0.2.1
│   │   │   │   └── libsecp256k1-core v0.2.2
│   │   │   │       ├── crunchy v0.2.3
│   │   │   │       ├── digest v0.9.0
│   │   │   │       │   └── generic-array v0.14.7 (*)
│   │   │   │       └── subtle v2.4.1
│   │   │   └── libsecp256k1-gen-genmult v0.2.1
│   │   │       └── libsecp256k1-core v0.2.2 (*)
│   │   ├── light-poseidon v0.2.0
│   │   │   ├── ark-bn254 v0.4.0 (*)
│   │   │   ├── ark-ff v0.4.2 (*)
│   │   │   ├── num-bigint v0.4.6 (*)
│   │   │   └── thiserror v1.0.69 (*)
│   │   ├── log v0.4.27
│   │   ├── memoffset v0.9.1
│   │   │   [build-dependencies]
│   │   │   └── autocfg v1.4.0
│   │   ├── num-bigint v0.4.6 (*)
│   │   ├── num-derive v0.4.2 (proc-macro)
│   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   ├── quote v1.0.40 (*)
│   │   │   └── syn v2.0.100 (*)
│   │   ├── num-traits v0.2.19 (*)
│   │   ├── rand v0.8.5 (*)
│   │   ├── rustversion v1.0.20 (proc-macro)
│   │   ├── serde v1.0.219 (*)
│   │   ├── serde_bytes v0.11.17
│   │   │   └── serde v1.0.219 (*)
│   │   ├── serde_derive v1.0.219 (proc-macro) (*)
│   │   ├── serde_json v1.0.140 (*)
│   │   ├── sha2 v0.10.8 (*)
│   │   ├── sha3 v0.10.8
│   │   │   ├── digest v0.10.7 (*)
│   │   │   └── keccak v0.1.5
│   │   │       └── cpufeatures v0.2.17 (*)
│   │   ├── solana-frozen-abi v1.18.26
│   │   │   ├── block-buffer v0.10.4 (*)
│   │   │   ├── bs58 v0.4.0
│   │   │   ├── bv v0.11.1 (*)
│   │   │   ├── either v1.15.0
│   │   │   ├── generic-array v0.14.7 (*)
│   │   │   ├── im v15.1.0
│   │   │   │   ├── bitmaps v2.1.0
│   │   │   │   │   └── typenum v1.18.0
│   │   │   │   ├── rand_core v0.6.4 (*)
│   │   │   │   ├── rand_xoshiro v0.6.0
│   │   │   │   │   └── rand_core v0.6.4 (*)
│   │   │   │   ├── rayon v1.10.0
│   │   │   │   │   ├── either v1.15.0
│   │   │   │   │   └── rayon-core v1.12.1
│   │   │   │   │       ├── crossbeam-deque v0.8.6
│   │   │   │   │       │   ├── crossbeam-epoch v0.9.18
│   │   │   │   │       │   │   └── crossbeam-utils v0.8.21
│   │   │   │   │       │   └── crossbeam-utils v0.8.21
│   │   │   │   │       └── crossbeam-utils v0.8.21
│   │   │   │   ├── serde v1.0.219 (*)
│   │   │   │   ├── sized-chunks v0.6.5
│   │   │   │   │   ├── bitmaps v2.1.0 (*)
│   │   │   │   │   └── typenum v1.18.0
│   │   │   │   └── typenum v1.18.0
│   │   │   │   [build-dependencies]
│   │   │   │   └── version_check v0.9.5
│   │   │   ├── lazy_static v1.5.0
│   │   │   ├── log v0.4.27
│   │   │   ├── memmap2 v0.5.10
│   │   │   │   └── libc v0.2.171
│   │   │   ├── serde v1.0.219 (*)
│   │   │   ├── serde_bytes v0.11.17 (*)
│   │   │   ├── serde_derive v1.0.219 (proc-macro) (*)
│   │   │   ├── sha2 v0.10.8 (*)
│   │   │   ├── solana-frozen-abi-macro v1.18.26 (proc-macro)
│   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   └── syn v2.0.100 (*)
│   │   │   │   [build-dependencies]
│   │   │   │   └── rustc_version v0.4.1 (*)
│   │   │   ├── subtle v2.4.1
│   │   │   └── thiserror v1.0.69 (*)
│   │   │   [build-dependencies]
│   │   │   └── rustc_version v0.4.1 (*)
│   │   ├── solana-frozen-abi-macro v1.18.26 (proc-macro) (*)
│   │   ├── solana-sdk-macro v1.18.26 (proc-macro)
│   │   │   ├── bs58 v0.4.0
│   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   ├── quote v1.0.40 (*)
│   │   │   ├── rustversion v1.0.20 (proc-macro)
│   │   │   └── syn v2.0.100 (*)
│   │   ├── thiserror v1.0.69 (*)
│   │   ├── tiny-bip39 v0.8.2
│   │   │   ├── anyhow v1.0.97
│   │   │   ├── hmac v0.8.1 (*)
│   │   │   ├── once_cell v1.21.3
│   │   │   ├── pbkdf2 v0.4.0
│   │   │   │   └── crypto-mac v0.8.0 (*)
│   │   │   ├── rand v0.7.3 (*)
│   │   │   ├── rustc-hash v1.1.0
│   │   │   ├── sha2 v0.9.9 (*)
│   │   │   ├── thiserror v1.0.69 (*)
│   │   │   ├── unicode-normalization v0.1.24
│   │   │   │   └── tinyvec v1.9.0
│   │   │   │       └── tinyvec_macros v0.1.1
│   │   │   └── zeroize v1.3.0 (*)
│   │   ├── wasm-bindgen v0.2.100
│   │   │   ├── cfg-if v1.0.0
│   │   │   ├── once_cell v1.21.3
│   │   │   ├── rustversion v1.0.20 (proc-macro)
│   │   │   └── wasm-bindgen-macro v0.2.100 (proc-macro)
│   │   │       ├── quote v1.0.40 (*)
│   │   │       └── wasm-bindgen-macro-support v0.2.100
│   │   │           ├── proc-macro2 v1.0.94 (*)
│   │   │           ├── quote v1.0.40 (*)
│   │   │           ├── syn v2.0.100 (*)
│   │   │           ├── wasm-bindgen-backend v0.2.100
│   │   │           │   ├── bumpalo v3.17.0
│   │   │           │   ├── log v0.4.27
│   │   │           │   ├── proc-macro2 v1.0.94 (*)
│   │   │           │   ├── quote v1.0.40 (*)
│   │   │           │   ├── syn v2.0.100 (*)
│   │   │           │   └── wasm-bindgen-shared v0.2.100
│   │   │           │       └── unicode-ident v1.0.18
│   │   │           └── wasm-bindgen-shared v0.2.100 (*)
│   │   └── zeroize v1.3.0 (*)
│   │   [build-dependencies]
│   │   ├── cc v1.2.17 (*)
│   │   └── rustc_version v0.4.1 (*)
│   └── thiserror v1.0.69 (*)
├── anchor-spl v0.30.1
│   ├── anchor-lang v0.30.1 (*)
│   ├── mpl-token-metadata v4.1.2
│   │   ├── borsh v0.10.4 (*)
│   │   ├── num-derive v0.3.3 (proc-macro)
│   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   ├── quote v1.0.40 (*)
│   │   │   └── syn v1.0.109 (*)
│   │   ├── num-traits v0.2.19 (*)
│   │   ├── solana-program v1.18.26 (*)
│   │   └── thiserror v1.0.69 (*)
│   ├── spl-associated-token-account v3.0.4
│   │   ├── assert_matches v1.5.0
│   │   ├── borsh v1.5.7 (*)
│   │   ├── num-derive v0.4.2 (proc-macro) (*)
│   │   ├── num-traits v0.2.19 (*)
│   │   ├── solana-program v1.18.26 (*)
│   │   ├── spl-token v4.0.3
│   │   │   ├── arrayref v0.3.9
│   │   │   ├── bytemuck v1.22.0 (*)
│   │   │   ├── num-derive v0.4.2 (proc-macro) (*)
│   │   │   ├── num-traits v0.2.19 (*)
│   │   │   ├── num_enum v0.7.3
│   │   │   │   └── num_enum_derive v0.7.3 (proc-macro)
│   │   │   │       ├── proc-macro-crate v3.3.0 (*)
│   │   │   │       ├── proc-macro2 v1.0.94 (*)
│   │   │   │       ├── quote v1.0.40 (*)
│   │   │   │       └── syn v2.0.100 (*)
│   │   │   ├── solana-program v1.18.26 (*)
│   │   │   └── thiserror v1.0.69 (*)
│   │   ├── spl-token-2022 v3.0.5
│   │   │   ├── arrayref v0.3.9
│   │   │   ├── bytemuck v1.22.0 (*)
│   │   │   ├── num-derive v0.4.2 (proc-macro) (*)
│   │   │   ├── num-traits v0.2.19 (*)
│   │   │   ├── num_enum v0.7.3 (*)
│   │   │   ├── solana-program v1.18.26 (*)
│   │   │   ├── solana-security-txt v1.1.1
│   │   │   ├── solana-zk-token-sdk v1.18.26
│   │   │   │   ├── aes-gcm-siv v0.10.3
│   │   │   │   │   ├── aead v0.4.3
│   │   │   │   │   │   └── generic-array v0.14.7 (*)
│   │   │   │   │   ├── aes v0.7.5
│   │   │   │   │   │   ├── cfg-if v1.0.0
│   │   │   │   │   │   ├── cipher v0.3.0
│   │   │   │   │   │   │   └── generic-array v0.14.7 (*)
│   │   │   │   │   │   ├── cpufeatures v0.2.17 (*)
│   │   │   │   │   │   └── opaque-debug v0.3.1
│   │   │   │   │   ├── cipher v0.3.0 (*)
│   │   │   │   │   ├── ctr v0.8.0
│   │   │   │   │   │   └── cipher v0.3.0 (*)
│   │   │   │   │   ├── polyval v0.5.3
│   │   │   │   │   │   ├── cfg-if v1.0.0
│   │   │   │   │   │   ├── cpufeatures v0.2.17 (*)
│   │   │   │   │   │   ├── opaque-debug v0.3.1
│   │   │   │   │   │   └── universal-hash v0.4.1
│   │   │   │   │   │       ├── generic-array v0.14.7 (*)
│   │   │   │   │   │       └── subtle v2.4.1
│   │   │   │   │   ├── subtle v2.4.1
│   │   │   │   │   └── zeroize v1.3.0 (*)
│   │   │   │   ├── base64 v0.21.7
│   │   │   │   ├── bincode v1.3.3 (*)
│   │   │   │   ├── bytemuck v1.22.0 (*)
│   │   │   │   ├── byteorder v1.5.0
│   │   │   │   ├── curve25519-dalek v3.2.1 (*)
│   │   │   │   ├── getrandom v0.1.16 (*)
│   │   │   │   ├── itertools v0.10.5 (*)
│   │   │   │   ├── lazy_static v1.5.0
│   │   │   │   ├── merlin v3.0.0
│   │   │   │   │   ├── byteorder v1.5.0
│   │   │   │   │   ├── keccak v0.1.5 (*)
│   │   │   │   │   ├── rand_core v0.6.4 (*)
│   │   │   │   │   └── zeroize v1.3.0 (*)
│   │   │   │   ├── num-derive v0.4.2 (proc-macro) (*)
│   │   │   │   ├── num-traits v0.2.19 (*)
│   │   │   │   ├── rand v0.7.3 (*)
│   │   │   │   ├── serde v1.0.219 (*)
│   │   │   │   ├── serde_json v1.0.140 (*)
│   │   │   │   ├── sha3 v0.9.1
│   │   │   │   │   ├── block-buffer v0.9.0 (*)
│   │   │   │   │   ├── digest v0.9.0 (*)
│   │   │   │   │   ├── keccak v0.1.5 (*)
│   │   │   │   │   └── opaque-debug v0.3.1
│   │   │   │   ├── solana-program v1.18.26 (*)
│   │   │   │   ├── solana-sdk v1.18.26
│   │   │   │   │   ├── assert_matches v1.5.0
│   │   │   │   │   ├── base64 v0.21.7
│   │   │   │   │   ├── bincode v1.3.3 (*)
│   │   │   │   │   ├── bitflags v2.9.0 (*)
│   │   │   │   │   ├── borsh v1.5.7 (*)
│   │   │   │   │   ├── bs58 v0.4.0
│   │   │   │   │   ├── bytemuck v1.22.0 (*)
│   │   │   │   │   ├── byteorder v1.5.0
│   │   │   │   │   ├── chrono v0.4.40
│   │   │   │   │   │   └── num-traits v0.2.19 (*)
│   │   │   │   │   ├── derivation-path v0.2.0
│   │   │   │   │   ├── digest v0.10.7 (*)
│   │   │   │   │   ├── ed25519-dalek v1.0.1
│   │   │   │   │   │   ├── curve25519-dalek v3.2.1 (*)
│   │   │   │   │   │   ├── ed25519 v1.5.3
│   │   │   │   │   │   │   └── signature v1.6.4
│   │   │   │   │   │   ├── rand v0.7.3 (*)
│   │   │   │   │   │   ├── serde v1.0.219 (*)
│   │   │   │   │   │   ├── sha2 v0.9.9 (*)
│   │   │   │   │   │   └── zeroize v1.3.0 (*)
│   │   │   │   │   ├── ed25519-dalek-bip32 v0.2.0
│   │   │   │   │   │   ├── derivation-path v0.2.0
│   │   │   │   │   │   ├── ed25519-dalek v1.0.1 (*)
│   │   │   │   │   │   ├── hmac v0.12.1
│   │   │   │   │   │   │   └── digest v0.10.7 (*)
│   │   │   │   │   │   └── sha2 v0.10.8 (*)
│   │   │   │   │   ├── generic-array v0.14.7 (*)
│   │   │   │   │   ├── hmac v0.12.1 (*)
│   │   │   │   │   ├── itertools v0.10.5 (*)
│   │   │   │   │   ├── lazy_static v1.5.0
│   │   │   │   │   ├── libsecp256k1 v0.6.0 (*)
│   │   │   │   │   ├── log v0.4.27
│   │   │   │   │   ├── memmap2 v0.5.10 (*)
│   │   │   │   │   ├── num-derive v0.4.2 (proc-macro) (*)
│   │   │   │   │   ├── num-traits v0.2.19 (*)
│   │   │   │   │   ├── num_enum v0.7.3 (*)
│   │   │   │   │   ├── pbkdf2 v0.11.0
│   │   │   │   │   │   └── digest v0.10.7 (*)
│   │   │   │   │   ├── qstring v0.7.2
│   │   │   │   │   │   └── percent-encoding v2.3.1
│   │   │   │   │   ├── qualifier_attr v0.2.2 (proc-macro)
│   │   │   │   │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │   │   ├── quote v1.0.40 (*)
│   │   │   │   │   │   └── syn v2.0.100 (*)
│   │   │   │   │   ├── rand v0.7.3 (*)
│   │   │   │   │   ├── rand v0.8.5 (*)
│   │   │   │   │   ├── rustversion v1.0.20 (proc-macro)
│   │   │   │   │   ├── serde v1.0.219 (*)
│   │   │   │   │   ├── serde_bytes v0.11.17 (*)
│   │   │   │   │   ├── serde_derive v1.0.219 (proc-macro) (*)
│   │   │   │   │   ├── serde_json v1.0.140 (*)
│   │   │   │   │   ├── serde_with v2.3.3
│   │   │   │   │   │   ├── serde v1.0.219 (*)
│   │   │   │   │   │   └── serde_with_macros v2.3.3 (proc-macro)
│   │   │   │   │   │       ├── darling v0.20.11
│   │   │   │   │   │       │   ├── darling_core v0.20.11
│   │   │   │   │   │       │   │   ├── fnv v1.0.7
│   │   │   │   │   │       │   │   ├── ident_case v1.0.1
│   │   │   │   │   │       │   │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │   │       │   │   ├── quote v1.0.40 (*)
│   │   │   │   │   │       │   │   ├── strsim v0.11.1
│   │   │   │   │   │       │   │   └── syn v2.0.100 (*)
│   │   │   │   │   │       │   └── darling_macro v0.20.11 (proc-macro)
│   │   │   │   │   │       │       ├── darling_core v0.20.11 (*)
│   │   │   │   │   │       │       ├── quote v1.0.40 (*)
│   │   │   │   │   │       │       └── syn v2.0.100 (*)
│   │   │   │   │   │       ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │   │       ├── quote v1.0.40 (*)
│   │   │   │   │   │       └── syn v2.0.100 (*)
│   │   │   │   │   ├── sha2 v0.10.8 (*)
│   │   │   │   │   ├── sha3 v0.10.8 (*)
│   │   │   │   │   ├── siphasher v0.3.11
│   │   │   │   │   ├── solana-frozen-abi v1.18.26 (*)
│   │   │   │   │   ├── solana-frozen-abi-macro v1.18.26 (proc-macro) (*)
│   │   │   │   │   ├── solana-logger v1.18.26
│   │   │   │   │   │   ├── env_logger v0.9.3
│   │   │   │   │   │   │   ├── atty v0.2.14
│   │   │   │   │   │   │   │   └── libc v0.2.171
│   │   │   │   │   │   │   ├── humantime v2.2.0
│   │   │   │   │   │   │   ├── log v0.4.27
│   │   │   │   │   │   │   ├── regex v1.11.1
│   │   │   │   │   │   │   │   ├── aho-corasick v1.1.3
│   │   │   │   │   │   │   │   │   └── memchr v2.7.4
│   │   │   │   │   │   │   │   ├── memchr v2.7.4
│   │   │   │   │   │   │   │   ├── regex-automata v0.4.9
│   │   │   │   │   │   │   │   │   ├── aho-corasick v1.1.3 (*)
│   │   │   │   │   │   │   │   │   ├── memchr v2.7.4
│   │   │   │   │   │   │   │   │   └── regex-syntax v0.8.5
│   │   │   │   │   │   │   │   └── regex-syntax v0.8.5
│   │   │   │   │   │   │   └── termcolor v1.4.1
│   │   │   │   │   │   ├── lazy_static v1.5.0
│   │   │   │   │   │   └── log v0.4.27
│   │   │   │   │   ├── solana-program v1.18.26 (*)
│   │   │   │   │   ├── solana-sdk-macro v1.18.26 (proc-macro) (*)
│   │   │   │   │   ├── thiserror v1.0.69 (*)
│   │   │   │   │   ├── uriparse v0.6.4
│   │   │   │   │   │   ├── fnv v1.0.7
│   │   │   │   │   │   └── lazy_static v1.5.0
│   │   │   │   │   └── wasm-bindgen v0.2.100 (*)
│   │   │   │   │   [build-dependencies]
│   │   │   │   │   └── rustc_version v0.4.1 (*)
│   │   │   │   ├── subtle v2.4.1
│   │   │   │   ├── thiserror v1.0.69 (*)
│   │   │   │   └── zeroize v1.3.0 (*)
│   │   │   ├── spl-memo v4.0.4
│   │   │   │   └── solana-program v1.18.26 (*)
│   │   │   ├── spl-pod v0.2.5
│   │   │   │   ├── borsh v1.5.7 (*)
│   │   │   │   ├── bytemuck v1.22.0 (*)
│   │   │   │   ├── solana-program v1.18.26 (*)
│   │   │   │   ├── solana-zk-token-sdk v1.18.26 (*)
│   │   │   │   └── spl-program-error v0.4.4
│   │   │   │       ├── num-derive v0.4.2 (proc-macro) (*)
│   │   │   │       ├── num-traits v0.2.19 (*)
│   │   │   │       ├── solana-program v1.18.26 (*)
│   │   │   │       ├── spl-program-error-derive v0.4.1 (proc-macro)
│   │   │   │       │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │       │   ├── quote v1.0.40 (*)
│   │   │   │       │   ├── sha2 v0.10.8 (*)
│   │   │   │       │   └── syn v2.0.100 (*)
│   │   │   │       └── thiserror v1.0.69 (*)
│   │   │   ├── spl-token v4.0.3 (*)
│   │   │   ├── spl-token-group-interface v0.2.5
│   │   │   │   ├── bytemuck v1.22.0 (*)
│   │   │   │   ├── solana-program v1.18.26 (*)
│   │   │   │   ├── spl-discriminator v0.2.5
│   │   │   │   │   ├── bytemuck v1.22.0 (*)
│   │   │   │   │   ├── solana-program v1.18.26 (*)
│   │   │   │   │   └── spl-discriminator-derive v0.2.0 (proc-macro)
│   │   │   │   │       ├── quote v1.0.40 (*)
│   │   │   │   │       ├── spl-discriminator-syn v0.2.0
│   │   │   │   │       │   ├── proc-macro2 v1.0.94 (*)
│   │   │   │   │       │   ├── quote v1.0.40 (*)
│   │   │   │   │       │   ├── sha2 v0.10.8 (*)
│   │   │   │   │       │   ├── syn v2.0.100 (*)
│   │   │   │   │       │   └── thiserror v1.0.69 (*)
│   │   │   │   │       └── syn v2.0.100 (*)
│   │   │   │   ├── spl-pod v0.2.5 (*)
│   │   │   │   └── spl-program-error v0.4.4 (*)
│   │   │   ├── spl-token-metadata-interface v0.3.5
│   │   │   │   ├── borsh v1.5.7 (*)
│   │   │   │   ├── solana-program v1.18.26 (*)
│   │   │   │   ├── spl-discriminator v0.2.5 (*)
│   │   │   │   ├── spl-pod v0.2.5 (*)
│   │   │   │   ├── spl-program-error v0.4.4 (*)
│   │   │   │   └── spl-type-length-value v0.4.6
│   │   │   │       ├── bytemuck v1.22.0 (*)
│   │   │   │       ├── solana-program v1.18.26 (*)
│   │   │   │       ├── spl-discriminator v0.2.5 (*)
│   │   │   │       ├── spl-pod v0.2.5 (*)
│   │   │   │       └── spl-program-error v0.4.4 (*)
│   │   │   ├── spl-transfer-hook-interface v0.6.5
│   │   │   │   ├── arrayref v0.3.9
│   │   │   │   ├── bytemuck v1.22.0 (*)
│   │   │   │   ├── solana-program v1.18.26 (*)
│   │   │   │   ├── spl-discriminator v0.2.5 (*)
│   │   │   │   ├── spl-pod v0.2.5 (*)
│   │   │   │   ├── spl-program-error v0.4.4 (*)
│   │   │   │   ├── spl-tlv-account-resolution v0.6.5
│   │   │   │   │   ├── bytemuck v1.22.0 (*)
│   │   │   │   │   ├── solana-program v1.18.26 (*)
│   │   │   │   │   ├── spl-discriminator v0.2.5 (*)
│   │   │   │   │   ├── spl-pod v0.2.5 (*)
│   │   │   │   │   ├── spl-program-error v0.4.4 (*)
│   │   │   │   │   └── spl-type-length-value v0.4.6 (*)
│   │   │   │   └── spl-type-length-value v0.4.6 (*)
│   │   │   ├── spl-type-length-value v0.4.6 (*)
│   │   │   └── thiserror v1.0.69 (*)
│   │   └── thiserror v1.0.69 (*)
│   ├── spl-pod v0.2.5 (*)
│   ├── spl-token v4.0.3 (*)
│   ├── spl-token-2022 v3.0.5 (*)
│   ├── spl-token-group-interface v0.2.5 (*)
│   └── spl-token-metadata-interface v0.3.5 (*)
├── fixed v1.27.0
│   ├── az v1.2.1
│   ├── bytemuck v1.22.0 (*)
│   ├── half v2.5.0
│   │   └── cfg-if v1.0.0
│   └── typenum v1.18.0
└── half v1.8.3