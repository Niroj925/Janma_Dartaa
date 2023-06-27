require("@nomiclabs/hardhat-ethers");
require("dotenv/config");
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY=process.env.ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY=process.env.SEPOLIA_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.18",

  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${SEPOLIA_PRIVATE_KEY}`],
      chainId:11155111
    }
  }
};