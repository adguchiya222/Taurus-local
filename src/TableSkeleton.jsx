import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Skeleton,
  Box,
} from '@mui/material';

const TableSkeleton = ({ rows = 5, columns = 5 }) => {
  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <Table sx={{ minWidth: 650 }}>
        {/* Table Head */}
        <TableHead>
          <TableRow>
            {Array.from({ length: columns }).map((_, index) => (
              <TableCell key={index}>
                <Skeleton
                  variant="text"
                  width="80%"
                  height={20}
                  animation="wave"
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={20}
                    animation="wave"
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableSkeleton;
