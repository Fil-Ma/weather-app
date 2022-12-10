import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import CurrentForecast from "./CurrentForecast";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

export default function ForecastContainer({ weatherData }) {

    return (
        <Box component="section">
            {/* 
                current forecast and alerts 
                weatherData.current and
                weatherData.alerts
            */}
            { weatherData.current 
                ? <CurrentForecast 
                    currentData={weatherData.current} />
                : <Typography>No weather data available</Typography>
            }   
            {/* 
                hourly forecast and daily forecast
                weatherData.hourly
                weatherData.daily
            */}
            <DailyForecast 
                dailyData={weatherData.daily} />

            <HourlyForecast
                hourlyData={weatherData.hourly} />
        </Box>
    )
}