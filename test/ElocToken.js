var ElocToken = artifacts.require("./ElocToken.sol");

require("chai").use(require("chai-as-promised")).should();

contract("ElocToken", (accounts) => {
  var token;
  var fullSupply = web3.utils.toWei("10000");

  before(async () => {
    token = await ElocToken.deployed();
  });

  it(`has a name`, async () => {
    const name = await token.name();
    assert.equal(name, "Eloc");
  });

  it(`has a symbol`, async () => {
    const symbol = await token.symbol();
    assert.equal(symbol, "ELOC");
  });

  it(`has a supply of ${web3.utils.fromWei(fullSupply)}`, async () => {
    const supply = await token.totalSupply();
    assert.equal(BigInt(supply), fullSupply);
  });

  it(`supply controlled by ${accounts[0]}`, async () => {
    const balance = await token.balanceOf(accounts[0]);
    assert.equal(BigInt(balance), fullSupply, "Full Supply Admin");
  });

  it(`Claim test ${accounts[0]}`, async () => {
    await token.claim();
    const claimed = await token.claimed(accounts[0]);
    assert.isTrue(claimed, "Claim Mapped");
  });

  it(`Double Claim rejection test`, async () => {
    await token.claim().should.be.rejected;
  });
});
