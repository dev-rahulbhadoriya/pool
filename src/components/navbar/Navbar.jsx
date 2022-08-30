import "./navbar.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DialogBox from "../../components/Dialog/Dialogbox";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import {Walletindex}  from "../../wallet/Walletindex"

const Navbar = () => {
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
              <Walletindex/>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
