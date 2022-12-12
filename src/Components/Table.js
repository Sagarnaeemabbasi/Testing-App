import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MyTable(props) {
  return (
    <div
      style={{ width: "90%", margin: "auto", marginBottom: "30px" }}
      className="container"
    >
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>

                {props.columnsData.map((element, index) => (
                  <StyledTableCell
                    key={index}
                    // align={column.align}
                    style={{ width:"100%", paddingLeft: 95 }}
                  >
                    {element}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rowsData.map((row, index) => {
                return (
                  <StyledTableRow
                    role="checkbox"
                    key={index}
                    style={{ width:"100%" }}
                  >
                    {props.columnsData.map((topNamecolumn, topNameindex) => {
                      const value = row[topNamecolumn];
                      return (
                        <StyledTableCell
                          key={topNameindex}
                          align="right"
                          tabIndex={-1}
                          style={{ width:"100%"}}
                        >
                          {/* {column.Course} */}
                          {value}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
