import React from "react";
import {
    Box, 
    Typography
} from "@mui/material";

export default function DailyForecast({ dayForecast }) {
    const hour = dayForecast.dt;
    const feelsLikeTemperature = dayForecast.feels_like; // array
    const temperature = dayForecast.temp; // array
    const pressure = dayForecast.pressure;
    const humidity = dayForecast.humidity;

    const statusMain = dayForecast.weather[0].main;
    const statusDescription = dayForecast.weather[0].main;
    const windSpeed = dayForecast.wind_speed;
    const windDirection = dayForecast.wind_deg;

    return (
        <Box sx={{ height: "5rem", overflow: "scroll" }}>
            <Typography>{hour}</Typography>
            <Typography>{statusMain}</Typography>
            <Typography>{statusDescription}</Typography>

            <Typography>{humidity}</Typography>
            <Typography>{pressure}</Typography>
            {/* <Typography>{temperature}</Typography> */}
            {/* <Typography>{feelsLikeTemperature}</Typography> */}
            
            <Typography>{windSpeed}</Typography>
            <Typography>{windDirection}</Typography>
        </Box>
    )
}