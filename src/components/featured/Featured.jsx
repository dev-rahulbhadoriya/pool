import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Icon from "react-crypto-icons";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chart from "../../components/chart/Chart";
import Box from '@mui/material/Box';

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeshow = (event) => {
    setAuth(event.target.checked);
  };
  return (
    <Box container className='option_main' >
      <Grid container spacing={{ xs: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
      {/* First Grid start*/}
        <Grid item xs={2} sm={4} md={4}>
          <Card variant="outlined" sx={{ maxWidth: 345, my: 4 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'white' }} aria-label="recipe">
                <Icon name="BNB" size={40} sx={{ mr: 2}} position="start"/> 
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  
                </IconButton>
              }
              title="WETH"
              subheader="Wrapped Ether Pool"
            />
            <Paper variant="outlined" 
              height="194" sx={{ p: 2 , mx: 2 }}>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    APY
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                    $4.50
                  </Typography>
                </Grid>
                </Grid>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    Utilization
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                    58..50%
                  </Typography>
                </Grid>
                </Grid>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    Toothbrush
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                    320.53 <Icon name="BNB" size={15} sx={{ mr: 2}} position="end"/> 
                  </Typography>
                </Grid>
                </Grid>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    Toothbrush
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                  <b>-</b>
                  </Typography>
                </Grid>
                </Grid>
              </Paper>
            <CardContent alignItems="center">
              <Typography center variant="body2" color="text.secondary">
              11.7% Below market price level
              </Typography>
            </CardContent>
            <div className="charts">
              {auth && (
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                )}
              </div>
          
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card variant="outlined" sx={{ maxWidth: 345, my: 4 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'white' }} aria-label="recipe">
                <Icon name="BNB" size={40} sx={{ mr: 2}} position="start"/> 
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  
                </IconButton>
              }
              title="WETH"
              subheader="Wrapped Ether Pool"
            />
            <Paper variant="outlined" 
              height="194" sx={{ p: 2 , mx: 2 }}>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    APY
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                    $4.50
                  </Typography>
                </Grid>
                </Grid>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    Utilization
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                    58..50%
                  </Typography>
                </Grid>
                </Grid>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    Toothbrush
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                    320.53 <Icon name="BNB" size={15} sx={{ mr: 2}} position="end"/> 
                  </Typography>
                </Grid>
                </Grid>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    Toothbrush
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                  <b>-</b>
                  </Typography>
                </Grid>
                </Grid>
              </Paper>
            <CardContent alignItems="center">
              <Typography center variant="body2" color="text.secondary">
              11.7% Below market price level
              </Typography>
            </CardContent>
            <div className="charts">
              {auth && (
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                )}
              </div>
          
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card variant="outlined" sx={{ maxWidth: 345, my: 4 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'white' }} aria-label="recipe">
                <Icon name="BNB" size={40} sx={{ mr: 2}} position="start"/> 
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  
                </IconButton>
              }
              title="WETH"
              subheader="Wrapped Ether Pool"
            />
            <Paper variant="outlined" 
              height="194" sx={{ p: 2 , mx: 2 }}>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    APY
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                    $4.50
                  </Typography>
                </Grid>
                </Grid>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    Utilization
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                    58..50%
                  </Typography>
                </Grid>
                </Grid>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    Toothbrush
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                    320.53 <Icon name="BNB" size={15} sx={{ mr: 2}} position="end"/> 
                  </Typography>
                </Grid>
                </Grid>
                <Grid container alignItems="center" >
                <Grid item xs>
                  <Typography gutterBottom variant="p" component="div">
                    Toothbrush
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="p" component="div">
                  <b>-</b>
                  </Typography>
                </Grid>
                </Grid>
              </Paper>
            <CardContent alignItems="center">
              <Typography center variant="body2" color="text.secondary">
              11.7% Below market price level
              </Typography>
            </CardContent>
            <div className="charts">
              {auth && (
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                )}
              </div>
          
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
