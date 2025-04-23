import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "../../../firebase"


const columns = [
  { id: 'date', label: 'Date', minWidth: 170 },
//   { id: 'code', label: 'Curah\u00a0Hujan\u00a0Dayeuhkolot', minWidth: 100 },
  {
    id: 'density',
    label: 'Curah\u00a0Hujan\u00a0Dayeuhkolot\u00a0(mm)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'Curah\u00a0Hujan\u00a0Bojongsoang\u00a0(mm)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'Tinggi\u00a0Muka\u00a0Air\u00a0Citarum\u00a0(m)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'Tinggi\u00a0Muka\u00a0Air\u00a0Polder\u00a0(m)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'size',
    label: 'Debit\u00a0Sungai\u00a0(m\u00b3)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size, date) {
  const density = population / size;
  return { name, code, population, size, density, date };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('China', 'CN', 1403500365, 9596961, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Italy', 'IT', 60483973, 301340, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('United States', 'US', 327167434, 9833520, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Canada', 'CA', 37602103, 9984670, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Australia', 'AU', 25475400, 7692024, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Germany', 'DE', 83019200, 357578, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Ireland', 'IE', 4857000, 70273, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Mexico', 'MX', 126577691, 1972550, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Japan', 'JP', 126317000, 377973, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('France', 'FR', 67022000, 640679, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('United Kingdom', 'GB', 67545757, 242495, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Russia', 'RU', 146793744, 17098246, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Nigeria', 'NG', 200962417, 923768, 'April 18, 2025 at 6:37:02 PM UTC+7'),
  createData('Brazil', 'BR', 210147125, 8515767, 'April 18, 2025 at 6:37:02 PM UTC+7'),
];

export default function DataList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
