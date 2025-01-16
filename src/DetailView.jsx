import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Divider,
  Grid,
  Card,
  CardContent,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import SideTab from './SideTab';
import { margin } from '@mui/system';

// const tablesData = [
//   [
//     { name: 'Server 1', ip: '192.168.0.1', status: 'Active' },
//     { name: 'Server 2', ip: '192.168.0.2', status: 'Inactive' },
//     { name: 'Server 3', ip: '192.168.0.3', status: 'Inactive' },
//     { name: 'Server 4', ip: '192.168.0.4', status: 'Active' },
//     { name: 'Server 5', ip: '192.168.0.5', status: 'Inactive' },
//   ],
//   [
//     { name: 'Server 2', ip: '192.168.0.2', status: 'Inactive' },
//     { name: 'Server 3', ip: '192.168.0.3', status: 'Inactive' },
//     { name: 'Server 4', ip: '192.168.0.4', status: 'Active' },
//     { name: 'Server 5', ip: '192.168.0.5', status: 'Inactive' },
//   ],
//   [
//     { name: 'Web Server 1', ip: '172.16.0.1', status: 'Active' },
//     { name: 'Web Server 2', ip: '172.16.0.2', status: 'Inactive' },
//       { name: 'Server 2', ip: '192.168.0.2', status: 'Inactive' },
//     { name: 'Server 3', ip: '192.168.0.3', status: 'Inactive' },
//     { name: 'Server 4', ip: '192.168.0.4', status: 'Active' },
//     { name: 'Server 5', ip: '192.168.0.5', status: 'Inactive' },
//   ],
// ];

const DetailView = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  // Sample data for detail view
  const data = {
    basic: {
      Name: 'Adnan Guchuay',
      Quantity: '10',
      Model: 'X123',
      'Model Category': 'Electronics',
      'Asset Tag': 'AST-2023',
    },
    financial: {
      'Invoice Number': 'INV-78901',
      Cost: '$1200',
      Vendor: 'Tech Supplies Inc.',
      Opened: '2023-11-25',
      'Assigned To': 'User 1',
      'Acquisition Method': 'Purchase',
    },
    contacts: {
      'Lease Contract': 'LC-001',
      'Warranty Expiry': '2025-12-31',
      Order: 'Order 1, Order 3',
      Description:
        'This is a sample description of the asset. It is intended for demonstration purposes only. The asset has been well maintained and is in excellent condition.',
    },
    contacts: {
      'Lease Contract': 'LC-001',
      'Warranty Expiry': '2025-12-31',
      Order: 'Order 1, Order 3',
      Description:
        'This is a sample description of the asset. It is intended for demonstration purposes only. The asset has been well maintained and is in excellent condition.',
    },
    contacts: {
      'Lease Contract': 'LC-001',
      'Warranty Expiry': '2025-12-31',
      Order: 'Order 1, Order 3',
      Description:
        'This is a sample description of the asset. It is intended for demonstration purposes only. The asset has been well maintained and is in excellent condition.',
    },
    contacts: {
      'Lease Contract': 'LC-001',
      'Warranty Expiry': '2025-12-31',
      Order: 'Order 1, Order 3',
      Description:
        'This is a sample description of the asset. It is intended for demonstration purposes only. The asset has been well maintained and is in excellent condition.',
    },
    contacts: {
      'Lease Contract': 'LC-001',
      'Warranty Expiry': '2025-12-31',
      Order: 'Order 1, Order 3',
      Description:
        'This is a sample description of the asset. It is intended for demonstration purposes only. The asset has been well maintained and is in excellent condition.',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: "column" ,
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        bgcolor: 'background.default',
    
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: '100%',
          maxWidth: '100%',
          p: 5,
          borderRadius: 4,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, #1e293b, #374151)'
              : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
            }}
          >
            Detail View
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Create Button */}
            <Button
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
              sx={{
                textTransform: 'capitalize',
                fontWeight: 600,
              }}
            >
              Create
            </Button>

            {/* View Assets Button */}
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              sx={{
                textTransform: 'capitalize',
                fontWeight: 600,
              }}
            >
              View Assets
            </Button>

            {/* Active Button with Dropdown */}
            <Button
              variant="contained"
              startIcon={<MoreVertIcon />}
              onClick={handleMenuOpen}
              sx={{
                textTransform: 'capitalize',
                fontWeight: 600,
                bgcolor: 'secondary.main',
                '&:hover': { bgcolor: 'secondary.dark' },
              }}
            >
              Action
            </Button>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                Edit
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <DeleteIcon fontSize="small" />
                </ListItemIcon>
                Delete
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <ContentCopyIcon fontSize="small" />
                </ListItemIcon>
                Duplicate
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <SearchIcon fontSize="small" />
                </ListItemIcon>
                Find Duplicate
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Divider sx={{ mb: 4 }} />

        {/* Scrollable Tabs */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            '& .MuiTab-root': {
              textTransform: 'capitalize',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'primary.main',
              },
            },
            '& .Mui-selected': {
              color: 'primary.main',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          <Tab label="Basic" />
          <Tab label="Financial" />
          <Tab label="Contacts" />
        </Tabs>

        {/* Tab Content */}
        <Card
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            background: 'background.paper',
          }}
        >
          <CardContent>
            {activeTab === 0 && (
              <Grid container spacing={2}>
                {Object.entries(data.basic).map(([key, value]) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <Box display="flex">
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: 'text.secondary',
                          flexShrink: 0,
                          minWidth: '40%',
                        }}
                      >
                        {key}:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 500,
                          flexGrow: 1,
                        }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
            {activeTab === 1 && (
              <Grid container spacing={2}>
                {Object.entries(data.financial).map(([key, value]) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <Box display="flex">
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: 'text.secondary',
                          flexShrink: 0,
                          minWidth: '40%',
                        }}
                      >
                        {key}:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 500,
                          flexGrow: 1,
                        }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
            {activeTab === 2 && (
              <Grid container spacing={2}>
                {Object.entries(data.contacts).map(([key, value]) => (
                  <Grid
                    item
                    xs={12}
                    sm={key === 'Description' ? 12 : 6}
                    key={key}
                  >
                    <Box display="flex" flexWrap={key === 'Description' ? 'wrap' : 'nowrap'}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: 'text.secondary',
                          flexShrink: 0,
                          minWidth: '40%',
                          mb: key === 'Description' ? 1 : 0,
                        }}
                      >
                        {key}:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 500,
                          flexGrow: 1,
                          whiteSpace: key === 'Description' ? 'pre-wrap' : 'nowrap',
                        }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </CardContent>
        </Card>

        </Paper>

 
        {/* <Paper
  elevation={8}
  sx={{
    width: '100%',
    maxWidth: '100%',
    p: 5,
    marginTop: '50px',
    borderRadius: 4,
    background: (theme) =>
      theme.palette.mode === 'dark'
        ? 'linear-gradient(145deg, #1e293b, #374151)'
        : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
  }}
>
  <Box>
    <SideTab tabsData={tablesData} />
  </Box>
</Paper>
 */}




     

     

    </Box>
  );
};

export default DetailView;
