import "./page-body.css";
import React, { useState } from "react";

import SearchBar from "../search/SearchBar";
import { retrieveWeatherData, geocodeCityName } from "../../api";

export default function PageBody() {
    // store data retrieved from API
    const [weatherQueryResult, setWeatherQueryResult] = useState(null);
    // store data for the API request
    const [cityName, setCityName] = useState("");
    const [dataUnits, setDataUnits] = useState("standard");
    const language = "en"

    // handle form submit
    async function handleSearchSubmit(event) {
        event.preventDefault();
        try {
            // geocode city name into latitude and longitude
            const { latitude, longitude } = await geocodeCityName(cityName)

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
        <main>
            <SearchBar handleSubmit={handleSearchSubmit}/>

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
        </main>
    )
}