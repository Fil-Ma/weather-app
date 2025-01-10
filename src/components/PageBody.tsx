import Box from "@mui/material/Box";
import CurrentForecast from "./Forecast/Current/CurrentForecast";
import DailyForecastTable from "./Forecast/Daily/DailyForecastTable";
import HourlyForecast from "./Forecast/Hourly/HourlyForecast";
import DataEmptyState from "./DataEmptyState";
import useWeatherData from "@hooks/useWeatherData";
import SearchForm from "./SearchForm/SearchForm";
import { styled, Typography } from "@mui/material";
import { dateToString } from "@utils/dateOperations";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import { useEffect, useState } from "react";

export default function PageBody() {
  const [currentDate, setCurrentDate] = useState({
    date: "",
    time: "",
  });
  const { fetchWeatherData, weatherData } = useWeatherData();
  const { language } = useLanguageContext();

  useEffect(() => {
    const interval = setInterval(() => {
      const { date, time } = dateToString(Date.now() / 1000, language);
      setCurrentDate({
        date,
        time,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <Main>
      <SearchForm onSubmit={fetchWeatherData} />

      <Box component="section" sx={{ position: "relative" }}>
        <Typography color="textPrimary">
          Current date: {currentDate.date}, {currentDate.time}
        </Typography>
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
  flexGrow: 1,

  [theme.breakpoints.down("sm")]: {
    paddingInline: "1rem",
  },
}));
