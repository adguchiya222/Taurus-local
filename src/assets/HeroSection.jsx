import { colors, Grid, Typography } from '@mui/material';
import React from 'react';
import Basketball from '../assets/basketball_in_net.jpg';

function HeroSection() {
  return (
    <div>
      <Grid container>
        <Grid item xl={6}>
          <Typography variant="h3" color="success">
            Grid box one
          </Typography>
        </Grid>
        <Grid item xl={6}>
          <img src={Basketball} alt="Basketball in net" />
          <h1 style={{color:"red"}}>this is a simple image</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroSection;
