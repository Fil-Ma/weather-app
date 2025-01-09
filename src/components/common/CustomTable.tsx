import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";

type Props = {
  title: string;
  columnLabels: string[];
  rows: Record<string, any[]>;
  rowLabelsDictionary: Record<string, string>;
  renderValue: (element: any, index: number, key: string) => React.ReactNode;
};

const CustomTable = ({
  title,
  columnLabels,
  rows,
  rowLabelsDictionary,
  renderValue,
}: Props) => {
  return (
    <Box
      sx={{
        minHeight: "30rem",
        backgroundColor: "background.paper",
        color: "primary.contrastText",
        borderRadius: "1rem",
        border: "1px solid rgba(0,0,0,0.3)",
        p: "1rem 2rem",
      }}
    >
      <Typography component="h2">{title}</Typography>
      <TableContainer sx={{ mt: "2rem" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader labels={columnLabels} />
          <TableBody>
            {Object.entries(rows).map(([key, values], index) => {
              return (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      backgroundColor: "background.paper",
                      color: "primary.contrastText",
                      position: "sticky", // ?
                      left: 0, // ?
                    }}
                    align="left"
                  >
                    {rowLabelsDictionary[key]}
                  </TableCell>
                  {values.map((el, index) => (
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: "background.paper",
                        color: "primary.contrastText",
                        minWidth: "5rem", // ?
                      }}
                      key={index}
                    >
                      {renderValue(el, index, key)}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const TableHeader = ({ labels }: { labels: string[] }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          sx={{
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            zIndex: 3, // ?
          }}
        ></TableCell>
        {labels.map((label, index) => {
          return (
            <TableCell
              align="center"
              key={index}
              sx={{
                backgroundColor: "primary.main",
                color: "#FFF",
                width: "max-content", // ?
                whiteSpace: "nowrap", // ?
              }}
            >
              {label}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default CustomTable;
