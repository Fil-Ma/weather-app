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
import { normalizeData } from "../utils/dataNormalization";

export default function DailyForecastTable({ dailyData }) {
    const { language, dictionary } = useLanguageContext();

    const columnLabels = [];
    const rows = {
        image: [],
        description: [],
        precipitationProbability: [],
        rain: [],
        snow: [],
        temperatureCelsius: [], // array min max
        feelsLikeCelsius: [], // array day night
        temperatureFahrenheit: [], // array
        feelsLikeFahrenheit: [], // array
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
        const normalizedObject = normalizeData(day, language);

        // column labels
        columnLabels.push(normalizedObject.date)

        // status column
        rows.image.push(normalizedObject.statusImage)
        rows.description.push(normalizedObject.statusDescription)

        // precipitation, rain, snow volumes
        rows.precipitationProbability.push(normalizedObject.precipitationProbability)
        rows.rain.push(normalizedObject?.rain ? normalizedObject.rain : "-")
        rows.snow.push(normalizedObject?.snow ? normalizedObject.snow : "-")

        // temperatures
        rows.temperatureCelsius.push(normalizedObject.temperatureCelsius)
        rows.temperatureFahrenheit.push(normalizedObject.temperatureFahrenheit)
        rows.feelsLikeCelsius.push(normalizedObject.feelsLikeCelsius)
        rows.feelsLikeFahrenheit.push(normalizedObject.feelsLikeFahrenheit)
        
        rows.pressure.push(normalizedObject.pressure)
        rows.humidity.push(normalizedObject.humidity)
        rows.windSpeed.push(normalizedObject.windSpeed)
        rows.windDirection.push(normalizedObject.windDirection)

        rows.sunrise.push(normalizedObject.sunrise)
        rows.sunset.push(normalizedObject.sunset)
        rows.moonrise.push(normalizedObject.moonrise)
        rows.moonset.push(normalizedObject.moonset)
        rows.moonphase.push(normalizedObject.moonphase)
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
                                                    if (rowKey === "temperatureCelsius" || rowKey === "feelsLikeCelsius" || rowKey === "temperatureFahrenheit" || rowKey === "feelsLikeFahrenheit") {
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