import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Options from "../../components/options/options";
import { useContext, useState,useEffect,useCallback } from "react";
import { createweb3Modal } from "../../utils/web3Modal/createweb3Modal";
import { useConnectWallet, useDisconnectWallet } from "../../utils/web3Modal/hooks";

const Home = () => {
const { connectWallet, web3, address, networkId, connected } =
useConnectWallet();
const { disconnectWallet } = useDisconnectWallet();
const [web3Modal, setModal] = useState(null);

useEffect(() => {
  setModal(createweb3Modal);
}, [setModal]);

useEffect(() => {
  if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
    connectWallet(web3Modal);
  }
}, [web3Modal, connectWallet]);

const connectWalletCallback = useCallback(() => {
  connectWallet(web3Modal);
}, [web3Modal, connectWallet]);

const disconnectWalletCallback = useCallback(() => {
  disconnectWallet(web3, web3Modal);
}, [web3, web3Modal, disconnectWallet]);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar  address={address}
          connected={connected}
          connectWallet={connectWalletCallback}
          disconnectWallet={disconnectWalletCallback}/>
       <div className="wrapper_inner">
          <Options  address={address}
          connected={connected}
          connectWallet={connectWalletCallback}
          disconnectWallet={disconnectWalletCallback}/>
       </div>
      </div>
    </div>
  );
};

export default Home;
