import React from 'react';
import {
  Box,
  Grid,
  Card,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon, Apps as AppsIcon } from '@mui/icons-material';

const WebsiteDashboard = () => {
  const websites = [
    { name: 'app.opexpert.com', url: 'https://app.opexpert.com', color: '#0895d8', Icon: AppsIcon },
    { name: 'app02.opexpert.com', url: 'https://app02.opexpert.com', color: '#f38d18', Icon: AppsIcon },
    { name: 'nms.opexpert.com', url: 'https://nms.opexpert.com', color: '#ef4480', Icon: AppsIcon },
    { name: 'app01.opexpert.com', url: 'https://app01.opexpert.com', color: '#43c274', Icon: AppsIcon },
  ];

  return (
    <Box >
      {/* Dashboard Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          margin: "20px 0px 0px 0px",
          fontSize: '30px',
          background: 'linear-gradient(to right, #0895d8, #fff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Embedded URL
      </Typography>

      <Grid container spacing={2}>
        {websites.map((site, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                p: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: site.color,
                color: '#fff',
                borderRadius: '15px',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              {/* Radial Background Top-Left */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-100%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%)',
                  transform: 'rotate(45deg)',
                }}
              />
              {/* Radial Background Bottom-Right */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '-100%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%)',
                  transform: 'rotate(-45deg)',
                }}
              />
              {/* Website Name */}
              <Box zIndex={1}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    fontSize: '20px',
                    letterSpacing: '1px',
                  }}
                >
                  {site.name}
                </Typography>
              </Box>
              {/* Icon Button */}
              <Avatar
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  width: 64,
                  height: 64,
                  zIndex: 1,
                }}
              >
                <IconButton
                  onClick={() => window.open(site.url, '_blank')}
                  sx={{
                    color: '#fff',
                    bgcolor: 'transparant',
                    borderRadius: '50%',
                    p: 1.5,
                  }}
                >
                  <ArrowForwardIcon fontSize="large" />
                </IconButton>
              </Avatar>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WebsiteDashboard;
