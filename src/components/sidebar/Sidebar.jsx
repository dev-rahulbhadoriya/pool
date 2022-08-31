import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import WorkIcon from '@mui/icons-material/Work';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Link } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import { DarkModeContext } from "../../context/darkModeContext";
import Button from '@mui/material/Button';
import { useContext } from "react";
import Box from '@mui/material/Box';


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
         <span className="logo">Premia</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link exact activeClassName="active" to='/' to="/" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Option</span>
            </li>
          </Link>
          <Link activeClassName="active" to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Pools</span>
            </li>
          </Link>
          </ul>
        <div className="sticky"style={{ float:"left", clear: "both", position: "fixed", bottom: "0"}} >
        <div className="bottom">
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
              },
            }}
          >
        <ButtonGroup fullWidth size="small" aria-label="small button group">
          <Button><WbSunnyIcon className="icon" 
            className=""
            onClick={() => dispatch({ type: "LIGHT" })}
            />
            </Button>
            <Button><NightlightIcon className="icon" 
            onClick={() => dispatch({ type: "DARK" })}
          />
          </Button>
        </ButtonGroup>
        </Box>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
