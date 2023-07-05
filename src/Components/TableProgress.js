import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';
import AddButton from './Buttons/AddButton';
import { Box } from '@mui/material';


const columns = [
  { id: 'exercise', label: 'Exercise', width: '30%' },
  { id: 'weight', label: 'Weight', width: '20%' },
  { id: 'type', label: 'Type', width: '20%' },
  { id: 'actions', label: 'Actions', width: '30%' },
];

const renderActions = ({ row, rows }) => (
  <div>
    <EditButton row={row} rows={rows} />
    <DeleteButton row={row} rows={rows} />
  </div>
);

function createData(exercise, weight, type, row) {
  return { exercise, weight, type, actions: renderActions(row) };
}

const rows = [
  createData('Shoulder press', 16, 'Rep', 1),
  createData('Bench press', 24, 'Rep', 2),
  createData('Bench press', 75, 'PR', 3),
];


const TableProgress = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        mb: { md: '120px', xs: '40px' } 
      }}>
      <Paper 
        sx={{ 
          width: '80%',
          overflow: 'hidden',
          backgroundColor: '#ae9a60' 
        }}>
        <TableContainer sx={{ maxHeight: 880 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ 
                    width: column.width,
                    fontSize: 18,
                    fontWeight: 'bold', 
                    backgroundColor: '#FCEFC1' 
                  }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AddButton />
        </div>
      </Paper>
    </Box>
  );
}

export default TableProgress;