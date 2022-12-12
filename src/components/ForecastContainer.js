import React from "react";
import { Box } from "@mui/material";
import CurrentForecast from "./CurrentForecast";
import DailyForecastTable from "./DailyForecastTable";
import HourlyForecast from "./HourlyForecast";
import NoData from "./NoData";

export default function ForecastContainer({ weatherData }) {

    return (
        <Box component="section">
            {/* message to display if no location has been entered */}
            {
                !weatherData && <NoData />
            }

            {/* current forecast */}
            { 
                weatherData?.current &&
                    <CurrentForecast 
                        currentData={weatherData.current} />
            }   

            {/* daily forecast */}
            {
                weatherData?.daily && 
                <DailyForecastTable dailyData={weatherData?.daily.slice(0, 6)} />
            }
        
            {/* hourly forecast */}
            <Box sx={{ mb: "4rem" }}>
                <Box 
                    sx={{ 
                        display: "flex", 
                        flexDirection: "row", 
                        flexWrap: "wrap", 
                        justifyContent: "space-around", 
                        mt: "2rem" 
                    }}>
                        {   
                            weatherData?.hourly &&
                            weatherData.hourly.slice(0, 24).map((hourData, index) => {
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