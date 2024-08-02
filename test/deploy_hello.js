const { ethers } = require("hardhat");
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.SWISSTRONICK_TESTNET);
const mainWallet = new ethers.Wallet(process.env.PRIKEY_TEST, provider);

// =====
const main = async () => {
  // deployethe contract
  const helloFactory = await ethers.getContractFactory("Swisstronik");
  const hello = await helloFactory.deploy(`cku is testing...`);

  await hello.waitForDeployment();
  const helloAddress = await hello.getAddress();
  console.log(`Success fully deploy hello contract at. ${helloAddress}`);

  //   connec to main wallet
  const helloConnect = hello.connect(mainWallet);

  const mess = await helloConnect.getMessage();
  console.log(`the message is: ${mess}`);

  //   new message
  await helloConnect.setMessage("uhm it works");
  const mess2 = await helloConnect.getMessage();
  console.log(`the new message is: ${mess2}`);
};

// ====
(async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
  }
})();
