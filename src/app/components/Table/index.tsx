/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ rows }:any) {
  return (
    <TableContainer
      sx={{
        "& .MuiTableCell-head": (theme) => {
          return {
            fontWeight: 700,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          };
        },
      }}
      component={Paper}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Accuracy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: any) => (
            <TableRow
              key={`${row.type}-${row.location}`}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:nth-of-type(odd)": (theme) => {
                  return {
                    backgroundColor: theme.palette.action.hover,
                  };
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.location}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell align="right">{row.accuracy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
