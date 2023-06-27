
const hre = require("hardhat");

async function main() {

  const BirthRegistrationApp=await hre.ethers.getContractFactory("BirthRegistration");//fetching bytcode and abi
  const birthRegistrationApp=await BirthRegistrationApp.deploy();//creating an instances of our smart contract

  await birthRegistrationApp.deployed();//depoying smart contract 
  console.log("Deployed contract address:",`${birthRegistrationApp.address}`);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



