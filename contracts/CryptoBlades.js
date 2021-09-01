export default [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "character",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "weapon",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "target",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint24",
        "name": "playerRoll",
        "type": "uint24"
      },
      {
        "indexed": false,
        "internalType": "uint24",
        "name": "enemyRoll",
        "type": "uint24"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "xpGain",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "skillGain",
        "type": "uint256"
      }
    ],
    "name": "FightOutcome",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "skillAmount",
        "type": "uint256"
      }
    ],
    "name": "InGameOnlyFundsGiven",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "count",
        "type": "uint32"
      }
    ],
    "name": "MintWeaponsFailure",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "count",
        "type": "uint32"
      }
    ],
    "name": "MintWeaponsSuccess",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "GAME_ADMIN",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MINT_PAYMENT_RECLAIM_MINIMUM_WAIT_TIME",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MINT_PAYMENT_TIMEOUT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PAYMENT_USING_STAKED_SKILL_COST_AFTER_DISCOUNT",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "blacksmith",
    "outputs": [
      {
        "internalType": "contract Blacksmith",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "burnWeaponFee",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "characters",
    "outputs": [
      {
        "internalType": "contract Characters",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fightRewardBaseline",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fightRewardGasOffset",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fightTraitBonus",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fightXpGain",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getRoleMember",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleMemberCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "inGameOnlyFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mintCharacterFee",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mintWeaponFee",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oneFrac",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "priceOracleSkillPerUsd",
    "outputs": [
      {
        "internalType": "contract IPriceOracle",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "promos",
    "outputs": [
      {
        "internalType": "contract Promos",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "randoms",
    "outputs": [
      {
        "internalType": "contract IRandoms",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "refillStaminaFee",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reforgeWeaponFee",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reforgeWeaponWithDustFee",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "skillToken",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stakeFromGameImpl",
    "outputs": [
      {
        "internalType": "contract IStakeFromGame",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalInGameOnlyFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalMintPaymentSkillRefundable",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "weapons",
    "outputs": [
      {
        "internalType": "contract Weapons",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_skillToken",
        "type": "address"
      },
      {
        "internalType": "contract Characters",
        "name": "_characters",
        "type": "address"
      },
      {
        "internalType": "contract Weapons",
        "name": "_weapons",
        "type": "address"
      },
      {
        "internalType": "contract IPriceOracle",
        "name": "_priceOracleSkillPerUsd",
        "type": "address"
      },
      {
        "internalType": "contract IRandoms",
        "name": "_randoms",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract Promos",
        "name": "_promos",
        "type": "address"
      }
    ],
    "name": "migrateTo_ef994e2",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IStakeFromGame",
        "name": "_stakeFromGame",
        "type": "address"
      }
    ],
    "name": "migrateTo_23b3a8b",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "migrateTo_801f279",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract Blacksmith",
        "name": "_blacksmith",
        "type": "address"
      }
    ],
    "name": "migrateTo_60872c8",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "migrateTo_6a97bd1",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "recoverSkill",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "REWARDS_CLAIM_TAX_MAX",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "REWARDS_CLAIM_TAX_DURATION",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_needed",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_available",
        "type": "uint256"
      }
    ],
    "name": "getSkillToSubtractSingle",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_used",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_remainder",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_inGameOnlyFunds",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_tokenRewards",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_skillNeeded",
        "type": "uint256"
      }
    ],
    "name": "getSkillToSubtract",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "fromInGameOnlyFunds",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fromTokenRewards",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fromUserWallet",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "playerAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "skillNeeded",
        "type": "uint256"
      }
    ],
    "name": "getSkillNeededFromUserWallet",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "skillNeededFromUserWallet",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMyCharacters",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMyWeapons",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint96",
        "name": "playerData",
        "type": "uint96"
      }
    ],
    "name": "unpackFightData",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "charTrait",
        "type": "uint8"
      },
      {
        "internalType": "uint24",
        "name": "basePowerLevel",
        "type": "uint24"
      },
      {
        "internalType": "uint64",
        "name": "timestamp",
        "type": "uint64"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "char",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "wep",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "target",
        "type": "uint32"
      },
      {
        "internalType": "uint8",
        "name": "fightMultiplier",
        "type": "uint8"
      }
    ],
    "name": "fight",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint24",
        "name": "playerBasePower",
        "type": "uint24"
      },
      {
        "internalType": "int128",
        "name": "wepMultiplier",
        "type": "int128"
      },
      {
        "internalType": "uint24",
        "name": "wepBonusPower",
        "type": "uint24"
      },
      {
        "internalType": "uint64",
        "name": "staminaTimestamp",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "hour",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "target",
        "type": "uint32"
      }
    ],
    "name": "verifyFight",
    "outputs": [],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "target",
        "type": "uint32"
      }
    ],
    "name": "getMonsterPower",
    "outputs": [
      {
        "internalType": "uint24",
        "name": "",
        "type": "uint24"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint24",
        "name": "basePower",
        "type": "uint24"
      },
      {
        "internalType": "int128",
        "name": "weaponMultiplier",
        "type": "int128"
      },
      {
        "internalType": "uint24",
        "name": "bonusPower",
        "type": "uint24"
      }
    ],
    "name": "getPlayerPower",
    "outputs": [
      {
        "internalType": "uint24",
        "name": "",
        "type": "uint24"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint24",
        "name": "traitsCWE",
        "type": "uint24"
      }
    ],
    "name": "getPlayerTraitBonusAgainst",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "char",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "wep",
        "type": "uint256"
      }
    ],
    "name": "getTargets",
    "outputs": [
      {
        "internalType": "uint32[4]",
        "name": "",
        "type": "uint32[4]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "attacker",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "defender",
        "type": "uint8"
      }
    ],
    "name": "isTraitEffectiveAgainst",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mintCharacter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "num",
        "type": "uint32"
      },
      {
        "internalType": "uint8",
        "name": "chosenElement",
        "type": "uint8"
      }
    ],
    "name": "mintWeaponN",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "chosenElement",
        "type": "uint8"
      }
    ],
    "name": "mintWeapon",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "num",
        "type": "uint32"
      },
      {
        "internalType": "uint8",
        "name": "chosenElement",
        "type": "uint8"
      }
    ],
    "name": "mintWeaponNUsingStakedSkill",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "chosenElement",
        "type": "uint8"
      }
    ],
    "name": "mintWeaponUsingStakedSkill",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_minter",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "num",
        "type": "uint32"
      }
    ],
    "name": "mintWeaponNforAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "burnID",
        "type": "uint256"
      }
    ],
    "name": "burnWeapon",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "burnIDs",
        "type": "uint256[]"
      }
    ],
    "name": "burnWeapons",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "reforgeID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "burnID",
        "type": "uint256"
      }
    ],
    "name": "reforgeWeapon",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "reforgeID",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "amountLB",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "amount4B",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "amount5B",
        "type": "uint8"
      }
    ],
    "name": "reforgeWeaponWithDust",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "burnID",
        "type": "uint256"
      }
    ],
    "name": "burnWeaponUsingStakedSkill",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "burnIDs",
        "type": "uint256[]"
      }
    ],
    "name": "burnWeaponsUsingStakedSkill",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "reforgeID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "burnID",
        "type": "uint256"
      }
    ],
    "name": "reforgeWeaponUsingStakedSkill",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "reforgeID",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "amountLB",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "amount4B",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "amount5B",
        "type": "uint8"
      }
    ],
    "name": "reforgeWeaponWithDustUsingStakedSkill",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IRandoms",
        "name": "_newRandoms",
        "type": "address"
      }
    ],
    "name": "migrateRandoms",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "playerAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "convertedAmount",
        "type": "uint256"
      }
    ],
    "name": "payPlayerConverted",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "weaponID",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "playerAddress",
        "type": "address"
      }
    ],
    "name": "approveContractWeaponFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "playerAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "convertedAmount",
        "type": "uint256"
      }
    ],
    "name": "payContractTokenOnly",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cents",
        "type": "uint256"
      }
    ],
    "name": "setCharacterMintValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tenthcents",
        "type": "uint256"
      }
    ],
    "name": "setFightRewardBaselineValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cents",
        "type": "uint256"
      }
    ],
    "name": "setFightRewardGasOffsetValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cents",
        "type": "uint256"
      }
    ],
    "name": "setWeaponMintValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cents",
        "type": "uint256"
      }
    ],
    "name": "setBurnWeaponValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cents",
        "type": "uint256"
      }
    ],
    "name": "setReforgeWeaponValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cents",
        "type": "uint256"
      }
    ],
    "name": "setReforgeWeaponWithDustValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "points",
        "type": "uint8"
      }
    ],
    "name": "setStaminaCostFight",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "points",
        "type": "uint8"
      }
    ],
    "name": "setDurabilityCostFight",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "average",
        "type": "uint256"
      }
    ],
    "name": "setFightXpGain",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "max",
        "type": "uint256"
      }
    ],
    "name": "setCharacterLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int128",
        "name": "_rewardsClaimTaxMax",
        "type": "int128"
      }
    ],
    "name": "setRewardsClaimTaxMax",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_numerator",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_denominator",
        "type": "uint256"
      }
    ],
    "name": "setRewardsClaimTaxMaxAsRational",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_percent",
        "type": "uint256"
      }
    ],
    "name": "setRewardsClaimTaxMaxAsPercent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_rewardsClaimTaxDuration",
        "type": "uint256"
      }
    ],
    "name": "setRewardsClaimTaxDuration",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "skillAmount",
        "type": "uint256"
      }
    ],
    "name": "giveInGameOnlyFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "skillAmount",
        "type": "uint256"
      }
    ],
    "name": "giveInGameOnlyFundsFromContractBalance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int128",
        "name": "usdAmount",
        "type": "int128"
      }
    ],
    "name": "usdToSkill",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimTokenRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stakeUnclaimedRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimXpRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTokenRewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "char",
        "type": "uint256"
      }
    ],
    "name": "getXpRewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      }
    ],
    "name": "getTokenRewardsFor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      }
    ],
    "name": "getTotalSkillOwnedBy",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOwnRewardsClaimTax",
    "outputs": [
      {
        "internalType": "int128",
        "name": "",
        "type": "int128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]