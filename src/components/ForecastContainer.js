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
            {/* message to display if no location has been entered */}
            {
                !weatherData && <Typography>No weather data available</Typography>
            }

            {/* current forecast */}
            { 
                weatherData?.current &&
                    <CurrentForecast 
                        currentData={weatherData.current} />
            }   

            {/* daily forecast */}
            <Box sx={{ mb: "4rem" }}>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", mt: "2rem" }}>
                    {   
                        weatherData?.daily && 
                        weatherData.daily.map((dayData, index) => {
                            return <DailyForecast 
                                        key={index} 
                                        dayForecast={dayData} />
                        })
                    }
                </Box>
            </Box>
            
            {/* hourly forecast */}
            <Box sx={{ mb: "4rem" }}>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", mt: "2rem" }}>
                    {   
                        weatherData?.hourly &&
                        weatherData.hourly.map((hourData, index) => {
                            return <HourlyForecast 
                                        key={index} 
                                        hourForecast={hourData} />
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}