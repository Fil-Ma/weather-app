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
import { createTableData } from "../utils/tableOperations";

export default function DailyForecastTable({ dailyData }: { dailyData: any }) {
  const { language, dictionary } = useLanguageContext();
  const { columnLabels, rows } = createTableData(dailyData, language);

  return (
    <Box
      sx={{
        mb: "4rem",
        minHeight: "30rem",
        backgroundColor: "background.paper",
        color: "primary.contrastText",
        borderRadius: "1rem",
        border: "1px solid rgba(0,0,0,0.3)",
        p: "1rem 2rem",
      }}
    >
      <Typography component="h2">{dictionary.forecast.daily.title}</Typography>
      <TableContainer sx={{ mt: "2rem" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                }}
              ></TableCell>
              {columnLabels.map((weatherDay, index) => {
                return (
                  <TableCell
                    align="center"
                    key={index}
                    sx={{
                      backgroundColor: "primary.main",
                      color: "#FFF",
                    }}
                  >
                    {weatherDay}
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
                    }}
                    align="left"
                  >
                    {dictionary.forecast.daily["row-labels"][key]}
                  </TableCell>
                  {values.map((element: any, index) => {
                    if (
                      key === "temperatureCelsius" ||
                      key === "feelsLikeCelsius" ||
                      key === "temperatureFahrenheit" ||
                      key === "feelsLikeFahrenheit"
                    ) {
                      return (
                        <TableCell
                          align="center"
                          sx={{
                            backgroundColor: "background.paper",
                            color: "primary.contrastText",
                          }}
                          key={index}
                        >
                          {element.min} | {element.max}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        align="center"
                        sx={{
                          backgroundColor: "background.paper",
                          color: "primary.contrastText",
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
