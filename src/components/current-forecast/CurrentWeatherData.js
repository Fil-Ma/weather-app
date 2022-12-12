import React, { useState } from "react";
import {
    Box,
    Typography,
    ButtonGroup,
    Button
} from "@mui/material";

export default function CurrentWeatherData({
    date,
    time,
    sunrise,
    sunset,
    temperatureCelsius,
    temperatureFahrenheit,
    feelsLikeCelsius, 
    feelsLikeFahrenheit,
    pressure,
    humidity,
    windSpeed,
    windDirection
}) {
    const [isTemperatureCelsius, setIsTemperatureCelsius] = useState(true);

    function toggleTemperatureUnits(event) {
        event.preventDefault();
        if (isTemperatureCelsius) {
            setIsTemperatureCelsius(false);
        } else {
            setIsTemperatureCelsius(true)
        }
    }

    return (
        <Box 
            display="grid" 
            gridTemplateRows="2rem repeat(4, 1fr) 2rem" 
            gap={1.5} 
            alignItems="center" 
            sx={{ 
                backgroundColor: "#FFF", 
                borderRadius: "1rem",
                p: "1rem 2rem",
                border: "1px solid rgba(0,0,0,0.3)"
            }}>

                <Box gridRow="1">
                    <Typography>
                        { date } { time }
                    </Typography>
                </Box>

                <Box gridRow="2/4">
                    <ButtonGroup variant="contained" sx={{ mb: "0.5rem" }}>
                        <Button 
                            sx={{ fontSize: "0.7rem", p: "0.25rem 1rem" }}
                            disabled={!isTemperatureCelsius} 
                            onClick={toggleTemperatureUnits}>Fahrenheit</Button>
                        <Button     
                            sx={{ fontSize: "0.7rem", p: "0.25rem 1rem" }}
                            disabled={isTemperatureCelsius} 
                            onClick={toggleTemperatureUnits}>Celsius</Button>
                    </ButtonGroup>
                    <Typography>
                        {
                            isTemperatureCelsius 
                                ? `Temperature is: ${temperatureCelsius}° celsius`
                                : `Temperature is: ${temperatureFahrenheit}° fahrenheit`
                        }
                    </Typography>
                    <Typography>
                        {
                            isTemperatureCelsius 
                                ? `Feels like it is: ${feelsLikeCelsius}° celsius`
                                : `Feels like it is: ${feelsLikeFahrenheit}° fahrenheit`
                        }
                    </Typography>
                </Box>

                <Box gridRow="4/5">
                    <Typography>
                        Pressure is {pressure} hPa
                    </Typography>
                    <Typography>
                        Humidity is {humidity} %
                    </Typography>
                </Box>

                <Box gridRow="5/6">
                    <Typography>
                        Wind speed is {windSpeed} m/s
                    </Typography>
                    <Typography>
                        Wind direction is {windDirection} 
                    </Typography>
                </Box>

                <Box gridRow="6/7">
                    <Typography>
                        Sunrise at: { sunrise } | Sunset at: { sunset }
                    </Typography>
                </Box>
        </Box>
    )
}