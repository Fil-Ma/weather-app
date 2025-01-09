import Box from "@mui/material/Box";
import CurrentForecast from "./Forecast/Current/CurrentForecast";
import DailyForecastTable from "./Forecast/Daily/DailyForecastTable";
import HourlyForecast from "./Forecast/Hourly/HourlyForecast";
import DataEmptyState from "./DataEmptyState";
import useWeatherData from "@hooks/useWeatherData";
import SearchForm from "./SearchForm/SearchForm";
import { styled } from "@mui/material";

export default function PageBody() {
  const { fetchWeatherData, weatherData } = useWeatherData();

  return (
    <Main>
      <SearchForm onSubmit={fetchWeatherData} />

      <Box component="section" sx={{ position: "relative" }}>
        {/* message to display if no location has been entered */}
        {!weatherData && <DataEmptyState />}

        {/* current forecast */}
        {weatherData?.currentForcast && (
          <CurrentForecast
            location={weatherData.location}
            data={weatherData.currentForcast}
          />
        )}

        {/* daily forecast */}
        {weatherData?.dailyForecast && (
          <DailyForecastTable data={weatherData.dailyForecast.slice(0, 6)} />
        )}

        {/* hourly forecast */}
        {weatherData?.hourlyForecast && (
          <HourlyForecast data={weatherData.hourlyForecast.slice(0, 24)} />
        )}
      </Box>
    </Main>
  );
}

const Main = styled("main")(({ theme }) => ({
  paddingBlock: "2rem",
  paddingInline: "4rem",

  [theme.breakpoints.down("sm")]: {
    paddingInline: "1rem",
  },
}));
