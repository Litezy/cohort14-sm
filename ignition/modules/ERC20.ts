// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://v2.hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ERC20Module = buildModule("ERC20Module", (m:any) => {
  // Deploy the ERC20 contract (no constructor args)
  const token = m.contract("ERC20", []);

  return { token };
});

export default ERC20Module;
