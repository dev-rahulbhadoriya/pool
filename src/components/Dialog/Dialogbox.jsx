import * as React from 'react';
import "./dialogbox.scss";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Reddit } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Icon from "react-crypto-icons";
import getWeb3 from '../../utils/web3Utils';
import {networkChangeId} from '../../utils/web3Modal/networkChange'
import { useDispatch } from 'react-redux';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({networkId,connectWallet}) {

  const [open, setOpen] = React.useState(false);  
  const dispatch = useDispatch()
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const connectToWallet = ()=>{
    dispatch(networkChangeId(1));
     // alert('hello i am network')
  }

  return (
    <div>
      <Button className="dropdown_btn" variant="outlined" onClick={handleClickOpen} endIcon={<KeyboardArrowDownIcon />}>
       <span>Chain </span>  <span style={{ color: "red", textTransform: "capitalize", paddingLeft: "5px" }}> Unsupported </span>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle  style={{ textAlign: "center"}} id="customized-dialog-title" onClose={handleClose}>
        <h2>Select Network</h2>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
                <Item onClick={connectToWallet}> <Icon name="BTC" size={40} sx={{ mr: 2}} position="start"/>
                <p>Ethereum </p> </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <Item> <Icon name="BNB" size={40} sx={{ mr: 2}} position="start"/>
                <p>BNB</p> 
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <Item> <Icon name="BNB" size={40} sx={{ mr: 2}} position="start"/> 
                <p>Ethereum </p></Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <Item> <Icon name="BNB" size={40} sx={{ mr: 2}} position="start"/> 
                <p>Ethereum </p></Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <Item> <Icon name="BNB" size={40} sx={{ mr: 2}} position="start"/> 
                <p>Ethereum </p></Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <Item> <Icon name="BNB" size={40} sx={{ mr: 2}} position="start"/>
                <p>Ethereum </p> </Item>
            </Grid>
        </Grid>
        </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
