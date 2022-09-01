//import Web3Ext from "web3";
import getRpcUrl from "../getRpcUrl";
//import { tryFetchPrice } from "../getPrices";
//const wbnbAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
const Contract = require("web3-eth-contract");
const provider = getRpcUrl();
//const axios = require("axios");
//const provider = "https://bsc-dataseed1.ninicoin.io/";
//const bep20Abi = require("../bep20.js");
const poolAbi = require("./pool");
//Contract.setProvider(provider);
//const bnb = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
//const bnbPool = "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16";
//const bnbContract = new Contract(bep20Abi.data, bnb);
//const provider = new Web3Ext.providers.HttpProvider("https://bsc-dataseed3.ninicoin.io");
///const web3ext = new Web3Ext(provider);
async function getTokenPrice(poolAddress, decimals) {
  if (window.bnbprice) {
    var pool = new Contract(poolAbi.data, poolAddress);
    let tokenInfo = await getTokensInfo(pool);
    //let bnbPrice = await axios.get("https://api.coingecko.com/api/v3/coins/binancecoin");
    //let bnbPrice = await tryFetchPrice(wbnbAddress);
    let bnbPrice = window.bnbprice;
    let tokenprice0 =
      (tokenInfo._reserve1 /
        10 ** 18 /
        (tokenInfo._reserve0 / 10 ** decimals)) *
      bnbPrice;
    let tokenprice1 =
      (tokenInfo._reserve0 /
        10 ** decimals /
        (tokenInfo._reserve1 / 10 ** 18)) *
      bnbPrice;

    return [tokenprice0, tokenprice1];
  }
}

async function getTokensInfo(pool) {
  await Contract.setProvider(provider);
  let token0 = await pool.methods.token0().call();

  let token1 = await pool.methods.token1().call();
  let {
    _reserve0,
    _reserve1,
    _blockTimestampLast
  } = await pool.methods.getReserves().call();
  return { token0, token1, _reserve0, _reserve1 };
}

async function getLpPrice(poolAddress, decimals) {
  let pool = new Contract(poolAbi.data, poolAddress);

  let lpSupply = await pool.methods.totalSupply().call();
  let {
    _reserve0,
    _reserve1,
    _blockTimestampLast
  } = await pool.methods.getReserves().call();
  let amount0 = _reserve0 / 10 ** decimals / (lpSupply / 10 ** 18);
  let amount1 = _reserve1 / 10 ** 18 / (lpSupply / 10 ** 18);

  return [amount0, amount1];
}

export default { getTokenPrice, getLpPrice };
