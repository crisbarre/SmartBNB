const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
   privateKeys: ['0xE417c96E7a4d3EFB0f6C68723d25E975bB51b30e'],
   providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
})


module.exports = {
  networks: {
    binanceTestnet: {
      provider: () => provider,
      network_id: "97",
      gas: 29000000
    },
    develop: {
      port: 8545
    }
  } 
};
