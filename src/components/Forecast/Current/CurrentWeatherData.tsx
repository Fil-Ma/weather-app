import React, { useState } from "react";
import { Box, Typography, ButtonGroup, Button } from "@mui/material";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import { TCurrentForecast } from "../types";
import { dateToString } from "@utils/dateOperations";
import { convertToKmh, getWindDirection } from "@utils/windOperations";
import {
  kelvinToCelsius,
  kelvinToFahrenheit,
} from "@utils/temperatureOperations";

export default function CurrentWeatherData({
  data,
}: {
  data: TCurrentForecast;
}) {
  const [isTemperatureCelsius, setIsTemperatureCelsius] = useState(true);
  const { dictionary, language } = useLanguageContext();

  function toggleTemperatureUnits(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsTemperatureCelsius(!isTemperatureCelsius);
  }

  const { date, time } = dateToString(data.dt, language);
  const windSpeed = convertToKmh(data.wind_speed);
  const windDirection = getWindDirection(data.wind_deg);

  const sunriseDateTime = dateToString(data.sunrise, language);
  const sunsetDateTime = dateToString(data.sunset, language);

  const temperature = isTemperatureCelsius
    ? kelvinToCelsius(data.temp)
    : kelvinToFahrenheit(data.temp);
  const feels_like = isTemperatureCelsius
    ? kelvinToCelsius(data.feels_like)
    : kelvinToFahrenheit(data.feels_like);

  return (
    <Box
      display="grid"
      gridTemplateRows="2rem repeat(4, 1fr) 2rem"
      gap={1.5}
      alignItems="center"
      sx={{
        backgroundColor: "background.paper",
        color: "primary.contrastText",
        borderRadius: "1rem",
        p: "1rem 2rem",
        border: "1px solid rgba(0,0,0,0.3)",
      }}
    >
      <Box gridRow="1">
        <Typography>
          {date} | {time}
        </Typography>
      </Box>

      <Box gridRow="2/4">
        <ButtonGroup variant="contained" sx={{ mb: "0.5rem" }}>
          <Button
            sx={{
              fontSize: "0.7rem",
              p: "0.25rem 1rem",
              backgroundColor: "primary.main",
              color: "#FFF",
            }}
            disabled={!isTemperatureCelsius}
            onClick={toggleTemperatureUnits}
          >
            Fahrenheit
          </Button>
          <Button
            sx={{
              fontSize: "0.7rem",
              p: "0.25rem 1rem",
              backgroundColor: "primary.main",
              color: "#FFF",
            }}
            disabled={isTemperatureCelsius}
            onClick={toggleTemperatureUnits}
          >
            Celsius
          </Button>
        </ButtonGroup>
        <Typography>
          {`${dictionary.forecast.current.temperature} ${temperature}° ${
            isTemperatureCelsius ? "celsius" : "fahrenheit"
          }`}
        </Typography>
        <Typography>
          {`${
            dictionary.forecast.current["feels-like-temperature"]
          } ${feels_like}° ${isTemperatureCelsius ? "celsius" : "fahrenheit"}`}
        </Typography>
      </Box>

      <Box gridRow="4/5">
        <Typography>
          {dictionary.forecast.current.pressure + data.pressure + "hPa"}
        </Typography>
        <Typography>
          {dictionary.forecast.current.humidity + data.humidity + "%"}
        </Typography>
      </Box>

      <Box gridRow="5/6">
        <Typography>
          {dictionary.forecast.current["wind-speed"] + windSpeed + "Km/h"}
        </Typography>
        <Typography>
          {dictionary.forecast.current["wind-direction"] + windDirection}
        </Typography>
      </Box>

      <Box gridRow="6/7">
        <Typography>
          {`${dictionary.forecast.current.sunrise}${sunriseDateTime.time} | ${dictionary.forecast.current.sunset}${sunsetDateTime.time}`}
        </Typography>
      </Box>
    </Box>
  );
}
