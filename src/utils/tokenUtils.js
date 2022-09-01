import getRpcUrl from "./getRpcUrl";
require("dotenv").config();
const Contract = require("web3-eth-contract");
const bep20Abi = require("./bep20.js");
const provider = getRpcUrl();

async function getBalance(tokenAddress, userAddress) {
  await Contract.setProvider(provider);
  var token = new Contract(bep20Abi.data, tokenAddress);
  let data = await token.methods.balanceOf(userAddress).call();
  return data;
}

export default getBalance;
