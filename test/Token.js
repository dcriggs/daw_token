const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Token", () => {
  let token;

  beforeEach(async () => {
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy("Dawson Is Cool Token", "DAW", "1000000");
  });

  describe("Deployment", () => {
    const name = "Dawson Is Cool Token"
    const symbol = "DAW"
    const decimals = '18'
    const totalSupply = tokens('1000000')

    it("has correct name", async () => {
      expect(await token.name()).to.equal("Dawson Is Cool Token");
    });

    it("has correct symbol", async () => {
      expect(await token.symbol()).to.equal("DAW");
    });

    it("has correct decimals", async () => {
      expect(await token.decimals()).to.equal("18");
    });

    it("has correct total supply", async () => {
      expect(await token.totalSupply()).to.equal(tokens("1000000"));
    });
  });
});
