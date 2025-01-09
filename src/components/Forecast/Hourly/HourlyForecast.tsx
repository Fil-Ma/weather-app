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
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import { createHourlyTableData } from "@utils/tableOperations";
import { THourlyForecast } from "../types";

export default function HourlyForecast({ data }: { data: THourlyForecast[] }) {
  const { language, dictionary } = useLanguageContext();
  const { columnLabels, rows } = createHourlyTableData(data, language);

  return (
    <Box
      sx={{
        minHeight: "30rem",
        backgroundColor: "background.paper",
        color: "primary.contrastText",
        border: "1px solid rgba(0,0,0,0.3)",
        borderRadius: "1rem",
        p: "1rem 2rem",
      }}
    >
      <Typography component="h2">{dictionary.forecast.hourly.title}</Typography>
      <TableContainer sx={{ mt: "2rem" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  zIndex: 3,
                }}
              ></TableCell>
              {columnLabels.map((hourTime, index) => {
                return (
                  <TableCell
                    align="center"
                    key={index}
                    sx={{
                      width: "max-content",
                      whiteSpace: "nowrap",
                      backgroundColor: "primary.main",
                      color: "#FFF",
                    }}
                  >
                    {hourTime}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(rows).map(([key, values], index) => {
              return (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      backgroundColor: "background.paper",
                      color: "primary.contrastText",
                      position: "sticky",
                      left: 0,
                    }}
                    align="left"
                  >
                    {dictionary.forecast.hourly["row-labels"][key]}
                  </TableCell>
                  {values.map((element, index) => {
                    return (
                      <TableCell
                        align="center"
                        sx={{
                          backgroundColor: "background.paper",
                          color: "primary.contrastText",
                          minWidth: "5rem",
                        }}
                        key={index}
                      >
                        {element}
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
  );
}
