import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  withStyles,
  Fade,
} from "@material-ui/core";
import useStyles from "./styles";
import colors from "../../utils/colors";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    borderBottomWidth: 0,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: colors.semiWhite,
    },
  },
}))(TableRow);

const TablesList = (props) => {
  const classes = useStyles();
  const dataLines = props.dataRows;

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      className={classes.tableContainer}
    >
      <Table style={{ borderCollapse: "inherit" }} className={classes.table}>
        <TableHead className={classes.header}>
          <TableRow>
            {props.dataHeader?.map((item, index) => {
              let style = {
                paddingTop: 15,
                paddingBottom: 15,
              };
              if (item.width) {
                style = { ...style, width: item.width };
              }

              return (
                <TableCell
                  key={item.id}
                  className={classes.textHeader}
                  align={item.align || "left"}
                  style={style}
                >
                  {item.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody key={Math.random()}>
          {dataLines?.map((row, index) => (
            <StyledTableRow
              key={row.id * Math.random()}
              style={{ borderCollapse: "inherit" }}
            >
              <Fade in={true} timeout={2000}>
                <>
                  {props.dataHeader?.map((column) => {
                    let style = {
                      paddingTop: 15,
                      paddingBottom: 15,
                    };
                    

                    return (
                      <StyledTableCell
                        style={style}
                        key={row.id + "-" + column.id}
                        align={column.align || "left"}
                        scope="row"
                      >
                        {row[column.id]?.content}
                      </StyledTableCell>
                    );
                  })}
                </>
              </Fade>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(TablesList);
