require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.19",
  networks: {
    swisstronick: {
      url: process.env.SWISSTRONICK_TESTNET,
      accounts: [process.env.PRIKEY_TEST],
    },
  },
};
