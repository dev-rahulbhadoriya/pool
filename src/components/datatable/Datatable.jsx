import * as React from 'react';
import "./datatable.scss";
import Featured from "../../components/featured/Featured";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import BoltIcon from '@mui/icons-material/Bolt';
import BorderAllIcon from '@mui/icons-material/BorderAll';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeshow = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box container className='option_main' sx={{ flexGrow: 1 }}  sx={{ padding: '0px 30px' }}>
       <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="stretch"
              spacing={2}>
             
       <Typography variant="h4" gutterBottom>
       <b>Pools</b>
      </Typography>
      <FormGroup>
        <FormControlLabel
        label='Show potential P&L'
          control={
            <Switch
              checked={auth}
              onChange={handleChangeshow}
              aria-label="login switch"
            />
          }
          
        />
      </FormGroup>
      
            </Stack>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
        <ToggleButton value="allpool" ><BorderAllIcon/>All Pools</ToggleButton>
        <ToggleButton value="smartpool"> <BoltIcon/>Smart Deposit</ToggleButton>
      </ToggleButtonGroup>
      <Featured/>
      </Box>

  );
}
