import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import React, { useState, useEffect } from "react";
import { providerOptions } from "./providerOptions";
import "./walletindex.scss";
import { ethers, providers } from "ethers";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Walletindex(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [web3Modal, setWeb3Modal] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [address, setAddress] = useState("");

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

  async function connectWallet() {
    try {
      const provider = await web3Modal.connect();

      addListeners(provider);

      const ethersProvider = new providers.Web3Provider(provider);
      console.log(ethersProvider);
      const userAddress = await ethersProvider.getSigner().getAddress();
      console.log(userAddress);
      setAddress(userAddress);
    } catch (err) {
      console.log("ERROR", err);
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
            <Button variant="text"> {address}</Button>
            <Button variant="text" onClick={disconnect}>
              <LoginIcon />
            </Button>
          </ButtonGroup>
        </div>
      )}
    </div>
  );
}
