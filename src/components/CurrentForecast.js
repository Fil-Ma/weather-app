import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import { dateToString } from "../utils/dateOperations";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temperatureOperations";

export default function CurrentForecast({ currentData }) {
    // current time, sunset and sunrise time
    const current = dateToString(currentData.dt);
    const sunrise = dateToString(currentData.sunrise);
    const sunset = dateToString(currentData.sunset); 

    // actual temperatures
    const tempC = kelvinToCelsius(currentData.temp);
    const tempF = kelvinToFahrenheit(currentData.temp);

    // feels like temperatures
    const feelsLikeC = kelvinToCelsius(currentData.feels_like);
    const feelsLikeF = kelvinToFahrenheit(currentData.feels_like);

    // pressure and humidity
    const pressure = currentData.pressure;
    const humidity = currentData.humidity;

    // wind speed and direction
    const windSpeed = currentData.wind_speed;
    const windDirection = currentData.wind_deg;

    // conditional keys
    // rain 
    // snow

    return (
        <Box sx={{ my: "3rem" }}>
            <Typography component="h3" sx={{ display: "block" }}>Current Forecast</Typography>
            <Box>
                {/* image of current situation */}
                <Typography>
                    status main: { currentData.weather[0].main }
                </Typography>
                <Typography>
                    accurate status: { currentData.weather[0].description }
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Current date: { current.currentDate }
                </Typography>
                <Typography>
                    Current time: { current.currentTime }
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Sunrise at: { sunrise.currentTime }
                </Typography>
                <Typography>
                    Sunset at: { sunset.currentTime }
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Temperature is: { tempC } celsius | { tempF} fahrenheit
                </Typography>
                <Typography>
                    Feels like it is: { feelsLikeC } celsius | { feelsLikeF } fahrenheit
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Pressure is {pressure} hPa
                </Typography>
                <Typography>
                    Humidity is {humidity} %
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Wind speed is {windSpeed} m/s
                </Typography>
                <Typography>
                    Wind direction is {windDirection} 
                </Typography>
            </Box>
        </Box>
    )
}