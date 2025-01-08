import React from "react";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import CurrentForecast from "./CurrentForecast";
import DailyForecastTable from "./DailyForecastTable";
import HourlyForecast from "./HourlyForecast";
import DataEmptyState from "./DataEmptyState";
import PositionSearch from "./PositionSearch";
import useWeatherData from "@hooks/useWeatherData";
import { Typography } from "@mui/material";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";

export default function PageBody() {
  const { fetchWeatherData, weatherData } = useWeatherData();
  const { dictionary } = useLanguageContext();

  const hasGeolocation = navigator.geolocation ? true : false;

  async function handleSearchSubmit(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    await fetchWeatherData();
  }

  return (
    <Box component="main" sx={{ py: "2rem", px: "4rem" }}>
      <Box
        component="section"
        sx={{
          width: "70%",
          mb: "4rem",
          mx: "auto",
        }}
      >
        <Typography sx={{ color: "primary.contrastText" }}>
          {dictionary.search["search-bar"].title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "12px",
          }}
        >
          <SearchBar />
          <PositionSearch
            hasGeolocation={hasGeolocation}
            handleGeopositionSearch={handleSearchSubmit}
          />
        </Box>
      </Box>

      <Box component="section" sx={{ position: "relative" }}>
        {/* message to display if no location has been entered */}
        {!weatherData && <DataEmptyState />}

        {/* current forecast */}
        {weatherData?.current && (
          <CurrentForecast currentData={weatherData.current} />
        )}

        {/* daily forecast */}
        {weatherData?.daily && (
          <DailyForecastTable dailyData={weatherData.daily.slice(0, 6)} />
        )}

        {/* hourly forecast */}
        {weatherData?.hourly && (
          <HourlyForecast hourlyData={weatherData.hourly.slice(0, 24)} />
        )}
      </Box>
    </Box>
  );
}
