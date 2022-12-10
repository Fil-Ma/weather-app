import React from "react";
import {
    Box, 
    Typography
} from "@mui/material";

export default function HourlyForecast({ hourForecast }) {
    const hour = hourForecast.dt;
    const feelsLikeTemperature = hourForecast.feels_like;
    const temperature = hourForecast.temp;
    const pressure = hourForecast.pressure;
    const humidity = hourForecast.humidity;

    const statusMain = hourForecast.weather[0].main;
    const statusDescription = hourForecast.weather[0].main;
    const windSpeed = hourForecast.wind_speed;
    const windDirection = hourForecast.wind_deg;

    return (
        <Box sx={{ height: "5rem", overflow: "scroll" }}>
            <Typography>{hour}</Typography>
            <Typography>{statusMain}</Typography>
            <Typography>{statusDescription}</Typography>

            <Typography>{humidity}</Typography>
            <Typography>{pressure}</Typography>
            <Typography>{temperature}</Typography>
            <Typography>{feelsLikeTemperature}</Typography>
            
            <Typography>{windSpeed}</Typography>
            <Typography>{windDirection}</Typography>
        </Box>
    )
}