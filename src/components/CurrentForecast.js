import React from "react";
import {
    Box, 
    Typography
} from "@mui/material";

import CurrentStatus from "./current-forecast/CurrentStatus";
import CurrentWeatherData from "./current-forecast/CurrentWeatherData";
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
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" sx={{ minHeight: "25rem"}} gap={3} >
                {/* current weather status: column 1*/}
                <Box gridColumn="1">
                    <CurrentStatus 
                        location="" 
                        image={currentData.weather[0].icon} 
                        currentStatus={currentData.weather[0].description} />
                </Box>

                {/* current weather data: column 2*/}
                <Box gridColumn="2">
                    <CurrentWeatherData 
                        date={current.currentDate}
                        time={current.currentTime}
                        sunrise={sunrise.currentTime}
                        sunset={sunset.currentTime}
                        temperatureCelsius={tempC}
                        temperatureFahrenheit={tempF}
                        feelsLikeCelsius={feelsLikeC}
                        feelsLikeFahrenheit={feelsLikeF}
                        pressure={pressure}
                        humidity={humidity}
                        windSpeed={windSpeed}
                        windDirection={windDirection} />
                </Box>
            </Box>
        </Box>
    )
}