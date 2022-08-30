import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';


export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider sx={{ mt: 2}} dateAdapter={AdapterDateFns}>
       <Typography paragraph></Typography>
      <DatePicker
        label="Custom"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField  className='date_picker' fullWidth label="fullWidth" id="fullWidth" {...params} />}
      />
      <Typography paragraph></Typography>
    </LocalizationProvider>
    
  );
}