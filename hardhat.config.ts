import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { configDotenv } from "dotenv";
configDotenv();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL ?? process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!SEPOLIA_RPC_URL) {
  throw new Error(
    "Missing SEPOLIA_RPC_URL or SEPOLIA_URL in your .env file. Set SEPOLIA_RPC_URL=https://... or SEPOLIA_URL=https://..."
  );
}

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};

export default config;
