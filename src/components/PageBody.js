import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";

import { useLanguageContext } from "../contexts/LanguageContext";
import { retrieveWeatherData } from "../api";

export default function PageBody() {
    // store data retrieved from API
    const [weatherQueryResult, setWeatherQueryResult] = useState(null);
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

            // store retrieved data
            setWeatherData(data);
            console.log("wheater data", data)
            // reset search component state 
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <Box component="main" sx={{ py: "3rem", px: "4rem" }}>
            <SearchBar /> 
            
            {/* 
                current forecast and alerts 
                weatherData.current and
                weatherData.alerts
            */}
            
            {/* 
                hourly forecast and daily forecast
                weatherData.hourly
                weatherData.daily
            */}
        </Box>
    )
}