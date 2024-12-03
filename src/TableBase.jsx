import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Checkbox,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Tabs,
  Tab,
  TextField,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import InfoIcon from '@mui/icons-material/Info';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(2, 'Donut', 452, 25.0, 51, 4.9),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0),
  createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
  createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
  createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
  createData(9, 'KitKat', 518, 26.0, 65, 7.0),
  createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
];

const initialColumns = [
  { id: 'name', label: 'Name', visible: true },
  { id: 'calories', label: 'Calories', visible: true },
  { id: 'fat', label: 'Fat (g)', visible: true },
  { id: 'carbs', label: 'Carbs (g)', visible: true },
  { id: 'protein', label: 'Protein (g)', visible: true },
];

export default function ThemedTable() {
  const theme = useTheme();

  const [rowsData, setRowsData] = React.useState(rows);
  const [columns, setColumns] = React.useState(initialColumns); // Manage columns
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selected, setSelected] = React.useState([]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [open, setOpen] = React.useState(false);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [columnDialogOpen, setColumnDialogOpen] = React.useState(false); // Column dialog
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [tabValue, setTabValue] = React.useState(0);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const [filter, setFilter] = React.useState({
    name: '',
    calories: '',
    fat: '',
    carbs: '',
    protein: '',
  });

  const [appliedFilter, setAppliedFilter] = React.useState({ ...filter });

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowDetailsClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rowsData.map((row) => row.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleFilterChange = (event) => {
    setFilter((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const applyFilter = () => {
    setAppliedFilter(filter);
    setFilterOpen(false);
  };

  const clearFilter = () => {
    setFilter({
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: '',
    });
    setAppliedFilter({
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: '',
    });
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleDeleteSelected = () => {
    setRowsData(rowsData.filter((row) => !selected.includes(row.id)));
    setSelected([]);
    handleMenuClose();
  };

  const handleExportSelected = () => {
    const selectedRows = rowsData.filter((row) => selected.includes(row.id));
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['id,name,calories,fat,carbs,protein']
        .concat(selectedRows.map((row) => Object.values(row).join(',')))
        .join('\n');
    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = 'selected_rows.csv';
    link.click();
    handleMenuClose();
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedColumns = Array.from(columns);
    const [moved] = reorderedColumns.splice(result.source.index, 1);
    reorderedColumns.splice(result.destination.index, 0, moved);
    setColumns(reorderedColumns);
  };

  const visibleColumns = columns.filter((col) => col.visible);

  return (
    <Box>
      {/* Toolbar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          {Object.values(appliedFilter).some((val) => val) && (
            <IconButton onClick={clearFilter}>
              <ClearIcon />
            </IconButton>
          )}
          <IconButton onClick={() => setFilterOpen(true)}>
            <FilterListIcon />
          </IconButton>
          <IconButton onClick={() => setColumnDialogOpen(true)}>
            <ViewColumnIcon />
          </IconButton>
          <Button
            variant="outlined"
            onClick={handleMenuOpen}
            endIcon={<MoreVertIcon />}
            sx={{ ml: 2 }}
          >
            Bulk Action
          </Button>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleDeleteSelected}>Delete Selected</MenuItem>
            <MenuItem onClick={handleExportSelected}>Export Selected</MenuItem>
          </Menu>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rowsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>

      {/* Table */}
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: theme.palette.action.hover }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < rowsData.length
                    }
                    checked={
                      rowsData.length > 0 && selected.length === rowsData.length
                    }
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                {visibleColumns.map((col) => (
                  <TableCell key={col.id}>
                    <TableSortLabel
                      active={orderBy === col.id}
                      direction={orderBy === col.id ? order : 'asc'}
                      onClick={() => handleRequestSort(col.id)}
                    >
                      {col.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = selected.includes(row.id);
                  return (
                    <TableRow
                      key={row.id}
                      sx={{
                        backgroundColor:
                          index % 2 === 0
                            ? theme.palette.background.default
                            : theme.palette.background.paper,
                      }}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      selected={isItemSelected}
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} />
                      </TableCell>
                      {visibleColumns.map((col) => (
                        <TableCell key={col.id}>{row[col.id]}</TableCell>
                      ))}
                      <TableCell align="center">
                        <IconButton onClick={() => handleRowDetailsClick(row)}>
                          <InfoIcon />
                        </IconButton>
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rowsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      {/* Column Reordering Dialog */}
      <Dialog
        open={columnDialogOpen}
        onClose={() => setColumnDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"space-between"}}>
        <DialogTitle>Reorder Columns</DialogTitle>
        <DialogTitle>Hide/Display</DialogTitle>
        </Box>
      
        <DialogContent>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="columns">
              {(provided) => (
                <List {...provided.droppableProps} ref={provided.innerRef}>
                  {columns.map((col, index) => (
                    <Draggable key={col.id} draggableId={col.id} index={index}>
                      {(provided) => (
                        <ListItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ListItemIcon>
                            <DragHandleIcon />
                          </ListItemIcon>
                          <ListItemText primary={col.label} />
                          <Checkbox
                            checked={col.visible}
                            onChange={() =>
                              setColumns((prev) =>
                                prev.map((c) =>
                                  c.id === col.id
                                    ? { ...c, visible: !c.visible }
                                    : c
                                )
                              )
                            }
                          />
                        </ListItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              )}
            </Droppable>
          </DragDropContext>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setColumnDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Row Details Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Row Details</DialogTitle>
        <DialogContent>
          {selectedRow &&
            Object.entries(selectedRow).map(([key, value]) => (
              <Box key={key} sx={{ mb: 1 }}>
                <strong>{key}:</strong> {value}
              </Box>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Filter Dialog */}
      <Dialog
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Filter Rows</DialogTitle>
        <DialogContent>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
            <Tab label="Quick Filter" />
            <Tab label="Advanced Filter" />
          </Tabs>
          {tabValue === 0 && (
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={filter.name}
              onChange={handleFilterChange}
              sx={{ mt: 2 }}
            />
          )}
          {tabValue === 1 && (
            <Box sx={{ mt: 2 }}>
              {['name', 'calories', 'fat', 'carbs', 'protein'].map((key) => (
                <TextField
                  key={key}
                  fullWidth
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  name={key}
                  value={filter[key]}
                  onChange={handleFilterChange}
                  sx={{ mb: 2 }}
                />
              ))}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={applyFilter}>Apply</Button>
          <Button onClick={() => setFilterOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
