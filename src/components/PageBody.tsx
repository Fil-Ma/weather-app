import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import ForecastContainer from "./ForecastContainer";
import { retrieveWeatherData } from "../api";
import PositionSearch from "./PositionSearch";

export default function PageBody() {
  // API response
  const [weatherData, setWeatherData] = useState<any>(null);
  // store data for the API request
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const hasGeolocation = navigator.geolocation ? true : false;

  // automatically load position from browser
  useEffect(() => {
    let isLoadingPosition = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }

    return () => {
      isLoadingPosition = false;
    };
  }, []);

  // handle form submit
  async function handleSearchSubmit(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    try {
      // retrieve weather data based on coordinates
      const data = await retrieveWeatherData(
        {
          latitude: latitude,
          longitude: longitude,
        },
        "standard",
        "en"
      );
      setWeatherData(data);
      console.log("weather data response", data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Box component="main" sx={{ py: "2rem", px: "4rem" }}>
      <Box
        component="section"
        sx={{
          width: "70%",
          mb: "4rem",
          mx: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SearchBar />

        <PositionSearch
          hasGeolocation={hasGeolocation}
          handleGeopositionSearch={handleSearchSubmit}
        />
      </Box>

      <ForecastContainer weatherData={weatherData} />
    </Box>
  );
}
