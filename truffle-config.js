'use strict';

const isCoverage = process.env.COVERAGE === 'true'

module.exports = {
  networks: {
  },

  plugins: ["solidity-coverage"],

  compilers: {
    solc: {
      version: "0.6.4",
      settings: {
        evmVersion: 'istanbul'
      }
    }
  },

  // optimization breaks code coverage
  solc: {
    optimizer: {
      enabled: !isCoverage,
      runs: 200
    }
  },

  mocha: isCoverage ? {
    reporter: 'mocha-junit-reporter',
  } : {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 10
    }
  }
};
