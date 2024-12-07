import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Button,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  Autocomplete,
  Paper,
  Divider,
  Card,
  CardContent,
  IconButton,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';
import NorthWestIcon from '@mui/icons-material/NorthWest';

const CreateForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [orderSelection, setOrderSelection] = useState([]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOrderChange = (event) => {
    setOrderSelection(event.target.value);
  };

  const orderOptions = ['Order 1', 'Order 2', 'Order 3', 'Order 4'];
  const autocompleteOptions = ['User 1', 'User 2', 'User 3'];
  const acquisitionMethods = ['Purchase', 'Lease', 'Donation'];

  return (
    <Box
      sx={{
        display: 'flex',
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
          maxWidth: '1400px',
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
            Create Form
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              sx={{
                textTransform: 'capitalize',
                fontWeight: 600,
                px: 3,
                borderRadius: 3,
              }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<CancelIcon />}
              sx={{
                textTransform: 'capitalize',
                fontWeight: 600,
                px: 3,
                borderRadius: 3,
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
        <Divider sx={{ mb: 4 }} />

        {/* Scrollable Tabs with Original Names */}
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
              <Grid container spacing={3}>
                {['Name', 'Quantity', 'Model', 'Model Category', 'Asset Tag'].map((label) => (
                  <Grid item xs={12} sm={6} key={label}>
                    <TextField
                      fullWidth
                      label={label}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
            {activeTab === 1 && (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Invoice Number"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Cost"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Vendor"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Opened"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    fullWidth
                    options={autocompleteOptions}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Assigned To"
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    fullWidth
                    displayEmpty
                    defaultValue=""
                    variant="outlined"
                    sx={{
                      borderRadius: 3,
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Acquisition Method
                    </MenuItem>
                    {acquisitionMethods.map((method) => (
                      <MenuItem key={method} value={method}>
                        {method}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            )}
            {activeTab === 2 && (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      border: 1,
                      borderRadius: 3,
                      borderColor: 'divider',
                      p: 1,
                      transition: 'border-color 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      label="Lease Contract"
                      variant="outlined"
                      InputProps={{ disableUnderline: true }}
                      sx={{
                        flexGrow: 1,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                        },
                      }}
                    />
                    <IconButton color="primary" aria-label="open window">
                      <NorthWestIcon />
                    </IconButton>
                    <IconButton color="error" aria-label="cancel">
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Warranty Expiry"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    multiple
                    value={orderSelection}
                    onChange={handleOrderChange}
                    renderValue={(selected) => selected.join(', ')}
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderRadius: 3,
                    }}
                  >
                    {orderOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        <Checkbox checked={orderSelection.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      },
                    }}
                  />
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default CreateForm;
