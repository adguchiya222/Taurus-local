import React from 'react';
import {
  Box,
  Grid,
  Card,
  Typography,
  Avatar,
} from '@mui/material';
import {
  Warning as WarningIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon,
  Build as BuildIcon,
} from '@mui/icons-material';

const DefaultDashboard = () => {
  const statistics = [
    { title: ' Incidents', count: 120, color: 'linear-gradient(45deg, #0895d8, #42a5f5)', icon: <WarningIcon fontSize="large" /> },
    { title: ' Projects', count: 45, color: 'linear-gradient(45deg, #f38d18, #ffb74d)', icon: <WorkIcon fontSize="large" /> },
    { title: ' Project Tasks', count: 300, color: 'linear-gradient(45deg, #ef4480, #ff6f91)', icon: <AssignmentIcon fontSize="large" /> },
    { title: 'Work Orders', count: 78, color: 'linear-gradient(45deg, #43c274, #66bb6a)', icon: <BuildIcon fontSize="large" /> },
  ];

  return (
    <Grid container spacing={2}>
      {statistics.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: stat.color,
              color: '#fff',
              borderRadius: "15px",
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.3)',
              },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '-140%',
                left: '-20%',
                width: '140%',
                height: '140%',
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%)',
                transform: 'rotate(45deg)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '-155%',
                right: '-20%',
                width: '140%',
                height: '140%',
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%)',
                transform: 'rotate(-45deg)',
              }}
            />
            <Box zIndex={1}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 1 , fontSize:"20px" , letterSpacing:"1px" }}
              >
                {stat.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: '600' ,fontSize:"18px" }}
              >
               Total: {stat.count}
              </Typography>
            </Box>
            <Avatar
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.3)',
                color: '#fff',
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                zIndex: 1,
              }}
            >
              {stat.icon}
            </Avatar>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DefaultDashboard;