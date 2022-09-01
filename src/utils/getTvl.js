import { getWeb3NoAccount } from "./web3Global";
import { tryFetchPrice } from "./getPrices";
import farmAbi from "../Resources/lib/abi/nativeFarmAbi.json";
import config from "../pools_config.json";
//const Contract = require("web3-eth-contract");
//const provider = "https://bsc-dataseed1.binance.org";
const wbnbAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
const web3 = getWeb3NoAccount();

const poolAbi = require("./aprLib/pool");
const farmAddress = "0x738600B15B2b6845d7Fe5B6C7Cb911332Fb89949";
//const axios = require("axios");

function send(results, status) {
  return new Promise(async (resolve, reject) => {
    for (var i = 0; i < config.length; i++) {
      let poolConfig = config[i];
      const pool = new web3.eth.Contract(farmAbi, farmAddress);
      let deposited = await pool.methods
        .stakedWantTokens(poolConfig.id, window.account)
        .call();
      let price = await tokenPrice(poolConfig);
      console.log("xd");
    }
    resolve();
  });
}

async function tokenPrice(poolConfig) {
  if (!poolConfig.isLp) {
    let tokenPrice = await getTokenPrice(
      poolConfig.price.lpaddress,
      poolConfig.decimals
    );
    tokenPrice = tokenPrice[poolConfig.price.reserve];
    return tokenPrice;
  } else {
    let value = await getLpPrice(
      poolConfig.price.lpaddress,
      poolConfig.decimals
    );
    value = value[poolConfig.price.reserve] * 2;
    let tokenPrice = await getTokenPrice(
      poolConfig.price.bnnlpaddress,
      poolConfig.decimals
    );

    tokenPrice = tokenPrice[poolConfig.price.reserve];
    return value * tokenPrice;
  }
}

// Prices steels
async function getTokenPrice(poolAddress, decimals) {
  if (window.bnbprice) {
    var pool = new web3.eth.Contract(poolAbi.data, poolAddress);

    let tokenInfo = await getTokensInfo(pool);
    //let bnbPrice = await axios.get("https://api.coingecko.com/api/v3/coins/binancecoin");
    //let bnbPrice = await tryFetchPrice(wbnbAddress);
    let bnbPrice = window.bnbprice;
    let tokenprice0 =
      (tokenInfo._reserve1 / 10 ** 18 / (tokenInfo._reserve0 / 10 ** 8)) *
      bnbPrice;
    let tokenprice1 =
      (tokenInfo._reserve0 / 10 ** 8 / (tokenInfo._reserve1 / 10 ** 18)) *
      bnbPrice;
    return [tokenprice0, tokenprice1];
  }
}

async function getTokensInfo(pool) {
  let token0 = await pool.methods.token0().call();
  let token1 = await pool.methods.token1().call();
  let {
    _reserve0,
    _reserve1,
    _blockTimestampLast
  } = await pool.methods.getReserves().call();
  return { _reserve0, _reserve1, _blockTimestampLast };
}

async function getLpPrice(poolAddress, decimals) {
  let pool = new web3.eth.Contract(poolAbi.data, poolAddress);

  let lpSupply = await pool.methods.totalSupply().call();
  let { _reserve0, _reserve1, _blockTimestampLast } = await getTokensInfo();
  let amount0 = _reserve0 / 10 ** decimals / (lpSupply / 10 ** 18);
  let amount1 = _reserve1 / 10 ** decimals / (lpSupply / 10 ** 18);

  return [amount0, amount1];
}

export default send;
