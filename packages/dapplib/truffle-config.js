require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stool response rifle unfair hard light army gasp'; 
let testAccounts = [
"0xaadc225612f996d53047078aa1438dea9dc5d19ee4ff758e8d29c7818b9bc75d",
"0xa5d5f2f762484fa0b502eaba2f7441227798e627d43704838e616bdaf0a76a01",
"0xdcf4445dcb936e7d023c39fcc14bbd88ffb3fab33cd672cd0bc2fea4b5dacf51",
"0xcf23125352cb60137968b39a2ce710f986e49bd3c614fc2466931b1fcc583f1d",
"0x94694134e59967a6d58d6f00e63bd64b645c7ebef4e747eaf0ebd852e49cd799",
"0xd01712c8eba294d1dbc5fe9bf618b5b19f95286a383e063b6f5c91c50dd72617",
"0xa65a18725889c1922297bdde6df5b8ee266147773f84677604ea8db6377e44f9",
"0x84ab96dcbda73d9eedd03e65ad464d842c4c1c1b8bb9c58b0b08f3a2a25d4018",
"0x6199dbd5849e5259a0280ce1a231b4b3ec4951fe6888403635ffa90a617d62eb",
"0x044ee192ff7cfffce07652a2d4c1f35f1ba87a7244cc9e2028d4ae446593e57c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

