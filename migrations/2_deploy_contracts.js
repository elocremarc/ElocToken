const ElocToken = artifacts.require("ElocToken");

module.exports = function (deployer) {
  deployer.deploy(ElocToken, web3.utils.toWei("10000"));
};
