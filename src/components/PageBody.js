import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import ForecastContainer from "./ForecastContainer";

import { useLanguageContext } from "../contexts/LanguageContext";
import { retrieveWeatherData } from "../api";

export default function PageBody() {
    // API response
    const [weatherData, setWeatherData] = useState({
        current: null,
        alerts: null,
        daily: null,
        hourly: null
    });
    // store data for the API request
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [dataUnits, setDataUnits] = useState("standard");
    const { language } = useLanguageContext();
    
    // automatically load position from browser
    useEffect(() => {
        let isLoadingPosition = true;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            })
        }

        return () => {
            isLoadingPosition = false;
        }
    }, [])

    // handle form submit
    async function handleSearchSubmit(event) {
        event.preventDefault();
        try {
            // retrieve weather data based on coordinates
            const data = await retrieveWeatherData(
                {
                    latitude: latitude,
                    longitude: longitude
                },
                dataUnits,
                language
            );
            setWeatherData(data);
            console.log("wheater data", data)
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <Box component="main" sx={{ py: "3rem", px: "4rem" }}>
            <SearchBar /> 
            
            <button onClick={handleSearchSubmit}>Or use your current position</button>
            
            <ForecastContainer weatherData={weatherData} />
        </Box>
    )
}