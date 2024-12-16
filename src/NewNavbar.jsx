import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider'; // Removed "type Navigation" from here
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import opexpertLOGO from './assets/images/opexpertLOGO.png';

import Home from './Home';
import Dashboard from './Dashboard';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'home',
    title: 'Home',
    icon: <DashboardIcon />,
    href: '/home',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    href: '/dashboard',
  },
];

const customTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#F9F9FE',
          paper: '#EEEEF9',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#2A4364',
          paper: '#112E4D',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const NewNavbar = () => {
  return (
    <Router>
      <AppProvider
        navigation={NAVIGATION}
        theme={customTheme}
        
      branding={{
        logo:  <img src={opexpertLOGO} alt="OpExpert" />,
        title: '',
      }}
      >
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </DashboardLayout>
      </AppProvider>
    </Router>
  );
};

export default NewNavbar;
