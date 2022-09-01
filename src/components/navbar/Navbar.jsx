import "./navbar.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DialogBox from "../../components/Dialog/Dialogbox";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, } from "react";
import LoginIcon from "@mui/icons-material/Login";
import ButtonGroup from "@mui/material/ButtonGroup";
import {shortenAddress} from "../../utils/stylish"

const Navbar = ({connected, address, connectWallet, disconnectWallet}) => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar" >
      <div className="wrapper" aria-label="sticky table">
        <div className="items">
          <Stack direction="row" alignItems='center' stickyHeader spacing={2}>
            {/* <Button variant="outlined" className="dropdown_btn" startIcon={<DeleteIcon />}>
            <span>Chain</span><span style={{ color: "red"}}>Unsupported</span>
          </Button> */}
            <DialogBox />
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
            <Button variant="text"> {shortenAddress(address)}</Button>
            <Button variant="text" onClick={disconnectWallet}>
              <LoginIcon />
            </Button>
          </ButtonGroup>
        </div>
      )}
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
