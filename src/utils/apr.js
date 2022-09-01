import BigNumber from "bignumber.js";
import { tryFetchPrice } from "./getPrices";
const BLOCKS_PER_DAY = new BigNumber((60 * 60 * 24) / 3);
const BLOCKS_PER_YEAR = new BigNumber(BLOCKS_PER_DAY * 365);
const qbertAddress = "0x6ED390Befbb50f4b492f08Ea0965735906034F81";
var qbertPrice = window.qbertprice;

export async function calculateApr(pool, balance, price, id, decimals) {
  const info = await pool.methods.poolInfo(id).call();
  const totalAlloc = await pool.methods.totalAllocPoint().call();
  var perBlock = await pool.methods.NATIVEPerBlock().call();
  perBlock = perBlock / 10 ** 18;
  const tvl = (balance / 10 ** decimals) * price;
  //const qbertPrice = window.qbertprice;
  if (!qbertPrice) {
    qbertPrice = await tryFetchPrice(qbertAddress);
  }
  const yearlyQbertRewardAllocation = new BigNumber(perBlock)
    .times(BLOCKS_PER_YEAR)
    .times(info.allocPoint / totalAlloc);
  const apr = yearlyQbertRewardAllocation.times(qbertPrice).div(tvl).times(100);
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber();
}
