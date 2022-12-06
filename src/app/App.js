import React, { useState, useEffect } from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { retrieveWeatherData } from "../api";

export default function App() {
    const [weatherData, setWeatherData] = useState(null);
    const weatherWidget = document.getElementById("weather-widget");

    // handle click on button main
    async function handleClick(event) {
        event.preventDefault();
        try {
            const data = await retrieveWeatherData({
                latitude: 46.04,
                longitude: 11.07
            });
            setWeatherData(data);
            console.log("wheater data", data)
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <Header />
            <main>
                <h1>This is a title</h1>
                <button onClick={handleClick}>Click here to retrieve data</button>
                <div id="weather-widget">

                </div>
            </main>
            <Footer />
        </>
    )
}