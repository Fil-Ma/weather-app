import React, { useState } from "react";
import { Box, Typography, ButtonGroup, Button } from "@mui/material";
import { useLanguageContext } from "../../contexts/LanguageContext";

export default function CurrentWeatherData({ data }) {
  const [isTemperatureCelsius, setIsTemperatureCelsius] = useState(true);
  const { dictionary } = useLanguageContext();

  function toggleTemperatureUnits(event) {
    event.preventDefault();
    if (isTemperatureCelsius) {
      setIsTemperatureCelsius(false);
    } else {
      setIsTemperatureCelsius(true);
    }
  }

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
          {data.date} | {data.time}
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
          {isTemperatureCelsius
            ? dictionary.forecast.current.temperature +
              `${data.temperatureCelsius}° celsius`
            : dictionary.forecast.current.temperature +
              `${data.temperatureFahrenheit}° fahrenheit`}
        </Typography>
        <Typography>
          {isTemperatureCelsius
            ? dictionary.forecast.current["feels-like-temperature"] +
              `${data.feelsLikeCelsius}° celsius`
            : dictionary.forecast.current["feels-like-temperature"] +
              `${data.feelsLikeFahrenheit}° fahrenheit`}
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
          {dictionary.forecast.current["wind-speed"] + data.windSpeed + "Km/h"}
        </Typography>
        <Typography>
          {dictionary.forecast.current["wind-direction"] + data.windDirection}
        </Typography>
      </Box>

      <Box gridRow="6/7">
        <Typography>
          {`${dictionary.forecast.current.sunrise}${data.sunrise} | ${dictionary.forecast.current.sunset}${data.sunset}`}
        </Typography>
      </Box>
    </Box>
  );
}
