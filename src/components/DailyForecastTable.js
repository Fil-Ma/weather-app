import React from "react";
import {
    Box,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";

import { useLanguageContext } from "../contexts/LanguageContext";
import { dateToString } from "../utils/dateOperations";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temperatureOperations";
import { getWindDirection, convertToKmh } from "../utils/windOperations";

export default function DailyForecastTable({ dailyData }) {
    const { dictionary } = useLanguageContext();
    const columnLabels = dailyData.map((day) => dateToString(day.dt).currentDate);
    const rows = {
        image: [],
        description: [],
        precipitationProbability: [],
        rain: [],
        snow: [],
        temperatureCelsius: [], // array min max
        // temperatureFahrenheit: [], // array
        feelsLikeCelsius: [], // array day night
        // feelsLikeFahrenheit: [], // array
        pressure: [],
        humidity: [],
        windSpeed: [],
        windDirection: [],
        sunrise: [],
        sunset: [],
        moonrise: [],
        moonset: [],
        moonphase: []
    }

    dailyData.forEach((day) => {
        rows.image.push(day.weather[0].icon)
        rows.description.push(day.weather[0].description)

        rows.precipitationProbability.push((day.pop * 100));
        rows.rain.push(day?.rain ? day.rain : "-")
        rows.snow.push(day?.snow ? day.snow : "-")

        rows.temperatureCelsius.push({
            min: kelvinToCelsius(day.temp.min),
            max: kelvinToCelsius(day.temp.max)
        })
        // rows.temperatureCelsius.push({
        //     min: kelvinToFahrenheit(day.temp.min),
        //     max: kelvinToFahrenheit(day.temp.max)
        // })
        rows.feelsLikeCelsius.push({
            min: kelvinToCelsius(day.feels_like.night),
            max: kelvinToCelsius(day.feels_like.day),
        })
        // rows.feelsLikeCelsius.push(kelvinToFahrenheit(day.feels_like))
        rows.pressure.push(day.pressure)
        rows.humidity.push(day.humidity)
        rows.windSpeed.push(convertToKmh(day.wind_speed))
        rows.windDirection.push(getWindDirection(day.wind_deg))

        rows.sunrise.push(dateToString(day.sunrise).currentTime)
        rows.sunset.push(dateToString(day.sunset).currentTime)
        rows.moonrise.push(dateToString(day.moonrise).currentTime)
        rows.moonset.push(dateToString(day.moonset).currentTime)
        rows.moonphase.push(day.moon_phase)
    })

    return (
        <Box 
            sx={{ 
                mb: "4rem", 
                minHeight: "30rem", 
                backgroundColor: "background.paper",
                color: "primary.contrastText", 
                borderRadius: "1rem", 
                border: "1px solid rgba(0,0,0,0.3)",
                p: "1rem 2rem"
            }}>
                <Typography component="h2">Daily Forecast</Typography>
                <TableContainer sx={{ mt: "2rem" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}>
                                    
                                </TableCell>
                                {
                                    columnLabels.map((weatherDay, index) => {
                                        return (
                                            <TableCell 
                                                align="center" 
                                                key={index} 
                                                sx={{ 
                                                    backgroundColor: "primary.main", 
                                                    color: "#FFF"
                                                }}>
                                                    {
                                                        weatherDay
                                                    }
                                            </TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                Object.keys(rows).map((rowKey, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell 
                                                sx={{ 
                                                    backgroundColor: "background.paper", 
                                                    color: "primary.contrastText" 
                                                }}
                                                align="left">
                                                    {
                                                        dictionary.forecast.daily["row-labels"][rowKey]
                                                    }
                                            </TableCell>
                                            {
                                                rows[rowKey].map((element, index) => {
                                                    if (rowKey === "temperatureCelsius" || rowKey === "feelsLikeCelsius") {
                                                        return (
                                                            <TableCell 
                                                                align="center" 
                                                                sx={{ 
                                                                    backgroundColor: "background.paper", 
                                                                    color: "primary.contrastText" 
                                                                }}
                                                                key={index}>
                                                                    { element.min } | { element.max }
                                                            </TableCell>
                                                        )
                                                    }
                                                    return (
                                                        <TableCell 
                                                            align="center" 
                                                            sx={{ 
                                                                backgroundColor: "background.paper", 
                                                                color: "primary.contrastText" 
                                                            }}
                                                            key={index}>
                                                                {element}
                                                        </TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
        </Box>
    )
}