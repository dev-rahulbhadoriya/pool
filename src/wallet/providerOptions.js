import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";

require('dotenv').config()
export const providerOptions = {
    walletlink: {
        package: CoinbaseWalletSDK, // Required
        options: {
            appName: "Web 3 Modal Demo", // Required
            infuraId: "3b4c376e15114e58b7ccb1ed167c0a7d" // Required unless you provide a JSON RPC url; see `rpc` below
        }
    },
    walletconnect: {
        package: WalletConnect,
        options: {
            infuraId: "3b4c376e15114e58b7ccb1ed167c0a7d"
        }
    }
}