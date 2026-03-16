import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const tokenAddress = process.env.TOKEN_ADDRESS ?? process.env.TOKEN;
  if (!tokenAddress) {
    throw new Error(
      "Missing TOKEN_ADDRESS in env. Set TOKEN_ADDRESS=<erc20 token address> (or set TOKEN=...)"
    );
  }

  const SaveAssets = await ethers.getContractFactory("SaveAssets");
  const saveAssets = await SaveAssets.deploy(tokenAddress);
//   await saveAssets.deployed();

  // ethers v6 (Hardhat) uses `target` / `getAddress()` instead of `.address`
  const deployedAddress = await saveAssets.getAddress();
  console.log("SaveAssets deployed to:", deployedAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
