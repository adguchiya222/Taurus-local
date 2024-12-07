import React, { useState } from 'react';
import {
  Box,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Button,
  Toolbar,
  IconButton,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SideTab = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setPage(0); // Reset pagination when switching tabs
  };

  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && order === 'asc';
    setOrder(isAscending ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => b[orderBy].localeCompare(a[orderBy])
      : (a, b) => a[orderBy].localeCompare(b[orderBy]);
  };

  const tabLabels = ['Interfaces', 'State' , 'Assets'];

  return (
    <Box sx={{ display: 'flex', height: '100%', bgcolor: 'background.default', borderRadius: '10px' }}>
      {/* Sidebar Tabs */}
      <Paper
        elevation={8}
        sx={{
          width: '15%',
          display: 'flex',
          alignItems:"left",
          flexDirection: 'column',
          textAlign:"left",
          borderRadius: '10px 0px 0px 10px',
          borderRight: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          orientation="vertical"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'capitalize',
              textAlign:"left",
            
              fontSize: '1rem',
              fontWeight: 600,
              color: 'text.secondary',
             width:"100%",
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              

              '&:hover': {
                color: 'primary.main',
              },
            },
            '& .Mui-selected': {
              color: 'primary.main',
              
              fontWeight: 700,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            },
          }}
        >
          {tabLabels.map((label, index) => (
            <Tab label={label} key={index} />
          ))}
        </Tabs>
      </Paper>

      {/* Table Section */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' ,   overflowX: 'auto',  borderRadius: '0px 10px 10px 0px'}}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box>
            <Button
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
              sx={{
                textTransform: 'capitalize',
                fontWeight: 600,
                marginRight: '15px',
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              Create
            </Button>
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              sx={{
                textTransform: 'capitalize',
                fontWeight: 600,
                bgcolor: 'secondary.main',
                '&:hover': { bgcolor: 'secondary.dark' },
              }}
            >
              Select
            </Button>
          </Box>

          <TablePagination
            rowsPerPageOptions={[4, 8, 12]}
            component="div"
            count={tabsData[activeTab].length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Toolbar>

        <TableContainer component={Paper} sx={{ flexGrow: 1, borderRadius: 0, paddingBottom: '70px' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? '#1e293b' : '#f0f0f0', // Theme-sensitive header color
                }}
              >
                {Object.keys(tabsData[activeTab][0]).map((key) => (
                  <TableCell
                    key={key}
                    align="center"
                    sx={{
                      fontWeight: 700,
                      color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#000000', // Contrast text
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === key}
                      direction={orderBy === key ? order : 'asc'}
                      onClick={() => handleRequestSort(key)}
                    >
                      {key.toUpperCase()}
                    </TableSortLabel>
                  </TableCell>
                ))}
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 700,
                    color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#000000', // Contrast text
                  }}
                >
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(tabsData[activeTab], getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      bgcolor: index % 2 === 0 ? '#f9f9f9' : '#ffffff', // Alternate row colors for light theme
                      '&:nth-of-type(odd)': {
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2d3748' : '#f9f9f9'),
                      },
                      '&:nth-of-type(even)': {
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1e293b' : '#ffffff'),
                      },
                    }}
                  >
                    {Object.values(row).map((value, idx) => (
                      <TableCell key={idx} align="center">
                        {value}
                      </TableCell>
                    ))}
                    <TableCell align="center">
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default SideTab;
