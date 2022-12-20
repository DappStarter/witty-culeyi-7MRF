require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stomach rival ranch quality hard light army gaze'; 
let testAccounts = [
"0x0bc7196236434fc2c0fca1f8276424e6ea4c17d4504410529ee587324fdb26bd",
"0xfdfe7c67cb5b75feda0e0256417ab28d29535753234d54f9758d9200cf6aeac3",
"0xc2f2ac5f2cad84c27830490d21531ea0e8b5168b4eb3563e3de33b7b711cc68e",
"0x9461c08c2c1106208cad6c3cb5fcf0622fd9cd3fc3decfff6b88936372867a42",
"0xe928c7448f1837425a75d5ea57afe7d90c7483161122f0d5990a5f218a1e9796",
"0xc2002bfdd17b7ff1aa1a259dad6b582b68b55a1b9ed023b0471598d7d1cfcd53",
"0xab9d4687337b034db29ae0dc800578b22d0aff24ea8ebc8158de42f2ca71a2e4",
"0x4000c96cd9e3b9c9332a7b2bf88859df0c126560e04e7d083f6d4ff9f63c29ce",
"0x0fb7bf5a52b2682316d77065b103168a48153e88bad0243522ad39f49dbb1396",
"0x14e5b18e105598bb7099e96ce224e3afe9d08b017b2eed0a537cb43aeeb39c37"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

