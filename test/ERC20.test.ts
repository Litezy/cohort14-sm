import { expect } from "chai";
import { ethers } from "hardhat";

describe("ERC20", function () {
  it("has the expected name/symbol/decimals", async function () {
    const Token = await ethers.getContractFactory("ERC20");
    const token = await Token.deploy();
    await token.waitForDeployment();

    expect(await token.name()).to.equal("WEB3CXIV");
    expect(await token.symbol()).to.equal("CXIV");
    expect(await token.decimals()).to.equal(18);
  });

  it("allows minting and updates balances", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("ERC20");
    const token = await Token.deploy();
    await token.waitForDeployment();

    const amount = ethers.parseUnits("1000", 18);
    await token.mint(owner.address, amount);

    expect(await token.balanceOf(owner.address)).to.equal(amount);
  });
});
