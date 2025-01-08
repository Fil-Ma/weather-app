import { useEffect, useState } from "react";
import { retrieveWeatherData } from "@api/index";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

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

  const fetchWeatherData = async () => {
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
  };

  return {
    fetchWeatherData,
    weatherData,
  };
};

export default useWeatherData;
