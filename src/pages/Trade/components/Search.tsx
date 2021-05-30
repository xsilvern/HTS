import {
  Box,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@material-ui/core";
type ColumnType = {
  id: string;
  label: string;
};

type RowType = {
  [key: string]: string | number;
};

const columns: ColumnType[] = [
  { id: "name", label: "Name" },
  { id: "code", label: "ISO\u00a0Code" },
  {
    id: "population",
    label: "Population",
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
  },
];

const rows: RowType[] = [
  { name: "India", code: "IN", population: 1324171354, size: 3287263 },
  { name: "India", code: "IN", population: 1324171354, size: 3287263 },
  { name: "India", code: "IN", population: 1324171354, size: 3287263 },
  { name: "India", code: "IN", population: 1324171354, size: 3287263 },
  { name: "India", code: "IN", population: 1324171354, size: 3287263 },
  { name: "India", code: "IN", population: 1324171354, size: 3287263 },
  { name: "India", code: "IN", population: 1324171354, size: 3287263 },
];

return (
  <Box>
    <Box>종목명</Box>
    <Box>
      <TableContainer className={}>
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
                          {column.format && typeof value === "number"
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
    </Box>
  </Box>
);
