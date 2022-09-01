const axios = require("axios");

export async function getPCSPrice(token) {
  const resPancakeSwap = await axios.get(
    `https://api.pancakeswap.info/api/v2/tokens/${token}`
  );
  const dataPancakeSwap = resPancakeSwap.data;
  if (dataPancakeSwap?.data?.price) {
    return dataPancakeSwap.data.price;
  }
}

export async function getDEXGuruPrice(token) {
  const resDexGuru = await axios.get(`https://api.dex.guru/v1/tokens/${token}`);
  const dataDexGuru = resDexGuru.data;
  if (dataDexGuru?.priceUSD) {
    return dataDexGuru.priceUSD;
  }
}

export async function getGeckoPrice(token) {
  const resCoinGecko = await axios.get(
    `https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=${token}&vs_currencies=usd`
  );
  const dataCoinGecko = resCoinGecko.data;
  if (dataCoinGecko?.[token]?.usd) {
    return dataCoinGecko[token].usd;
  }
}

export async function getDebankPrice(token) {
  const resDebank = await axios.get(
    `https://openapi.debank.com/v1/token?chain_id=bsc&id=${token}`
  );
  const dataDebank = resDebank.data;
  if (dataDebank) {
    return dataDebank.price;
  }
}

export async function getCovalentPrice(token) {
  const resCovalent = await axios.get(
    `https://api.covalenthq.com/v1/56/networks/pancakeswap_v2/assets/${token}/?&key=ckey_a4ddd369f1ab4c52b3d07589264`
  );
  const dataCovalent = resCovalent.data;
  const preresponse = dataCovalent.data.items[0];
  if (preresponse?.quote_rate) {
    return preresponse.quote_rate;
  }
}

export async function tryFetchPrice(token) {
  // try coingecko
  try {
    const geckoprice = await getGeckoPrice(token);
    if (geckoprice) {
      return geckoprice;
    }
  } catch (error) {
    console.log("Fallo coingecko");
  }
  // try pancake swap api
  try {
    const Pcsprice = await getPCSPrice(token);
    if (Pcsprice) {
      return Pcsprice;
    }
  } catch (error) {
    console.log("PCS fallo");
  }
  // try dexguru api
  try {
    const dexprice = await getDEXGuruPrice(token);
    if (dexprice) {
      return dexprice;
    }
  } catch (error) {
    console.log("Fallo dexguru");
  }

  return 0;
}

export async function tryFetchLPPrice(token) {
  // try covalent API
  try {
    const covalentPrice = await getCovalentPrice(token);
    if (covalentPrice) {
      return covalentPrice;
    }
  } catch (error) {
    console.log("Fallo covalent API");
  }
  // try Debank api
  try {
    const DebankPrice = await getDebankPrice(token);
    if (DebankPrice) {
      return DebankPrice;
    }
  } catch (error) {
    console.log("Debank fallo");
  }
}
