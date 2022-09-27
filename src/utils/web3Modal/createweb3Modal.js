import Web3Modal from "web3modal";
import { providerOptions } from "../../utils/web3Modal/getNetworks";
import { DarkModeContext } from "../../context/darkModeContext";

export const createweb3Modal = new Web3Modal({
  network: "binance", // optional or "binance"
  cacheProvider: true, // optional
  providerOptions, // required
  disableInjectedProvider: false,

  // theme: {
  //   background: "rgb(0 0 0 / 71%)",
  //   main: "#fff",
  //   secondary: "rgb(251 186 3)",
  //   border: "rgb(0 0 0)",
  //   hover: "rgb(246 0 255 / 31%)",
  // },
  //providerOptions // required
});
