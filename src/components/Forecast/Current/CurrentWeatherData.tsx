import { Box, Typography } from "@mui/material";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import { TCurrentForecast } from "../types";
import { dateToString } from "@utils/dateOperations";
import { convertToKmh, getWindDirection } from "@utils/windOperations";
import {
  kelvinToCelsius,
  kelvinToFahrenheit,
} from "@utils/temperatureOperations";
import Toggle from "@components/common/Toggle";
import useUnitsToggle from "@hooks/useUnitsToggle";

export default function CurrentWeatherData({
  data,
}: {
  data: TCurrentForecast;
}) {
  const { dictionary, language } = useLanguageContext();
  const { unit, options, onChange } = useUnitsToggle();

  const { date, time } = dateToString(data.dt, language);
  const windSpeed = convertToKmh(data.wind_speed);
  const windDirection = getWindDirection(data.wind_deg);

  const sunriseDateTime = dateToString(data.sunrise, language);
  const sunsetDateTime = dateToString(data.sunset, language);

  const temperature =
    unit === "celsius"
      ? kelvinToCelsius(data.temp)
      : kelvinToFahrenheit(data.temp);
  const feels_like =
    unit === "fahrenheit"
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
        <Typography color="textPrimary">
          {date} | {time}
        </Typography>
      </Box>

      <Box gridRow="2/4">
        <Toggle
          value={unit}
          options={options}
          size="small"
          onChange={onChange}
        />
        <Typography color="textPrimary">
          {`${dictionary.forecast.current.temperature} ${temperature}° ${
            unit === "celsius" ? "celsius" : "fahrenheit"
          }`}
        </Typography>
        <Typography color="textPrimary">
          {`${
            dictionary.forecast.current["feels-like-temperature"]
          } ${feels_like}° ${unit === "celsius" ? "celsius" : "fahrenheit"}`}
        </Typography>
      </Box>

      <Box gridRow="4/5">
        <Typography color="textPrimary">
          {dictionary.forecast.current.pressure + data.pressure + "hPa"}
        </Typography>
        <Typography color="textPrimary">
          {dictionary.forecast.current.humidity + data.humidity + "%"}
        </Typography>
      </Box>

      <Box gridRow="5/6">
        <Typography color="textPrimary">
          {dictionary.forecast.current["wind-speed"] + windSpeed + "Km/h"}
        </Typography>
        <Typography color="textPrimary">
          {dictionary.forecast.current["wind-direction"] + windDirection}
        </Typography>
      </Box>

      <Box gridRow="6/7">
        <Typography color="textPrimary">
          {`${dictionary.forecast.current.sunrise}${sunriseDateTime.time} | ${dictionary.forecast.current.sunset}${sunsetDateTime.time}`}
        </Typography>
      </Box>
    </Box>
  );
}
