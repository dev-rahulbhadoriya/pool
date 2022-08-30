import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import React, { createContext, useContext, useState, useEffect } from "react";
import { providerOptions } from "./providerOptions";
import "./walletindex.scss";
import { ethers, providers } from "ethers";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import ButtonGroup from "@mui/material/ButtonGroup";
import { toHex, truncateAddress } from "./utils";

const CoinsContext = createContext({});

export const Walletindex = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [web3Modal, setWeb3Modal] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState();
  const [error, setError] = useState("");
  const [chainId, setChainId] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
      network: "mainnet",
      providerOptions,
    });
    setWeb3Modal(newWeb3Modal);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // connect automatically and without a popup if user is already connected
    if (web3Modal && web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAddress(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

  async function connectWallet() {
    try {
      const provider = await web3Modal.connect();

      addListeners(provider);

      const ethersProvider = new providers.Web3Provider(provider);
      const userAddress = await ethersProvider.getSigner().getAddress();
      console.log(userAddress);
      const network = await ethersProvider.getNetwork();
      setAddress(userAddress);
      setProvider(provider);
      // setLibrary(library);
      // if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
    } catch (err) {
      setError(err);
    }
  }

  async function addListeners(web3ModalProvider) {
    web3ModalProvider.on("accountsChanged", (accounts) => {
      window.location.reload();
    });

    // Subscribe to chainId change
    web3ModalProvider.on("chainChanged", (chainId) => {
      window.location.reload();
    });
  }

  const refreshState = () => {
    setAddress();
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };
  return (
    // <CoinsContext.Provider value={{ address, provider, chainId }}>
    //   <div>
    //     {children}
    //     {!address ? (
    //       <Button
    //         variant="contained"
    //         className="connect_btn "
    //         startIcon={<AccountBalanceWalletIcon />}
    //         onClick={connectWallet}
    //       >
    //         Connect Wallet
    //       </Button>
    //     ) : (
    //       <div>
    //         <ButtonGroup
    //           className="wallet_btn_disconnect"
    //           aria-label="outlined button group"
    //         >
    //           <Button variant="text"> {truncateAddress(address)}</Button>
    //           <Button variant="text" onClick={disconnect}>
    //             <LoginIcon />
    //           </Button>
    //         </ButtonGroup>
    //       </div>
    //     )}
    //   </div>
    // </CoinsContext.Provider>

    <div>
      {!address ? (
        <Button
          variant="contained"
          className="connect_btn "
          startIcon={<AccountBalanceWalletIcon />}
          onClick={connectWallet}
        >
          Connect Wallet
        </Button>
      ) : (
        <div>
          <ButtonGroup
            className="wallet_btn_disconnect"
            aria-label="outlined button group"
          >
            <Button variant="text"> {truncateAddress(address)}</Button>
            <Button variant="text" onClick={disconnect}>
              <LoginIcon />
            </Button>
          </ButtonGroup>
        </div>
      )}
    </div>
  );
};

export const useCoins = () => useContext(CoinsContext);
