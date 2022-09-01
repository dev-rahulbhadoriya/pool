import { connectors } from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import {
  mathwlt,
  twtwlt,
  sfplwlt,
  bnbwlt,
  mtmskwlt,
} from "../../UIMain/assets/wallets";

export const providerOptions = {
  /* See Provider Options Section */
  injected: {
    display: {
      name: "Metamask",
      description: "Metamask",
      logo: mtmskwlt,
    },
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: "https://bsc-dataseed.binance.org/",
        56: "https://bsc-dataseed.binance.org/",
      },
      infuraId: "3b4c376e15114e58b7ccb1ed167c0a7d",
    },
  },
  "custom-binance": {
    display: {
      name: "Binance",
      description: "Binance Chain Wallet",
      logo: bnbwlt,
    },
    package: "binance",
    connector: async (ProviderPackage, options) => {
      let provider = window.BinanceChain;
      provider.autoRefreshOnNetworkChange = true;
      await provider.enable();
      return provider;
    },
  },
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: "3b4c376e15114e58b7ccb1ed167c0a7d",
      rpc: {
        1: "https://bsc-dataseed.binance.org/",
        56: "https://bsc-dataseed.binance.org/",
      }, // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
  // "custom-math": {
  //   display: {
  //     name: "Math",
  //     description: "Math Wallet",
  //     logo: mathwlt
  //   },
  //   package: "math",
  //   connector: connectors.injected
  // },
  // "custom-twt": {
  //   display: {
  //     name: "Trust",
  //     description: "Trust Wallet",
  //     logo: twtwlt
  //   },
  //   package: "twt",
  //   connector: connectors.injected
  // },
  // "custom-safepal": {
  //   display: {
  //     name: "SafePal",
  //     description: "SafePal App",
  //     logo: sfplwlt
  //   },
  //   package: "safepal",
  //   connector: connectors.injected
  // }
};
