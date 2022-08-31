/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CollapsedBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Typography sx={{mt: 2}}>Strike Price</Typography>
          {/* <Skeleton variant="text" sx={{ fontSize: '2rem' }} /> */}
          <OutlinedInput fullWidth sx={{mb: 2}}
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
    </div>
  );
}
