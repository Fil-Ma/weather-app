import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import CurrentForecast from "./CurrentForecast";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

export default function ForecastContainer({ weatherData }) {
    // console.log("weather data", weatherData)
    return (
        <Box component="section">
            {/* 
                current forecast and alerts 
                weatherData.current and
                weatherData.alerts
            */}
            { 
                weatherData?.current 
                    ? <CurrentForecast 
                        currentData={weatherData.current} />
                    : <Typography>No weather data available</Typography>
            }   

            {/* daily forecast */}
            <Box sx={{ mb: "4rem" }}>
                <Typography component="h3" sx={{ display: "block" }}>Daily Forecast</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", mt: "2rem" }}>
                    {   
                        weatherData?.daily
                            ? weatherData.daily.map((dayData, index) => {
                                return <DailyForecast 
                                            key={index} 
                                            dayForecast={dayData} />
                            }) : (
                                <Typography>No daily data</Typography>
                            )
                    }
                </Box>
            </Box>
            
            {/* hourly forecast */}
            <Box sx={{ mb: "4rem" }}>
                <Typography component="h3" sx={{ display: "block" }}>Hourly Forecast</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", mt: "2rem" }}>
                    {   
                        weatherData?.hourly
                            ? weatherData.hourly.map((hourData, index) => {
                                return <HourlyForecast 
                                            key={index} 
                                            hourForecast={hourData} />
                            }) : (
                                <Typography>No hourly data</Typography>
                            )
                    }
                </Box>
            </Box>
        </Box>
    )
}