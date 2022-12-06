import "./page-body.css";
import React, { useState } from "react";

import SearchBar from "../search/SearchBar";

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
            // const { latitude, longitude } = geocodeCityName(cityName)
            const data = await retrieveWeatherData(
                {
                    latitude: 46.04,
                    longitude: 11.07
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