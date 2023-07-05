require("@nomiclabs/hardhat-ethers");
require("dotenv/config");
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY=process.env.ALCHEMY_API_KEY;
const WALLET_PRIVATE_KEY=process.env.WALLET_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.18",

  networks:{
    zkEVM:{
      url:`https://polygonzkevm-testnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${WALLET_PRIVATE_KEY}`],
      chainId:1442
    }
  }
};