import { useCallback, useState } from "react";
import { retrieveWeatherData } from "@api/index";
import { parseWeatherData } from "@components/Forecast/utils";
import { IParsedData } from "@components/Forecast/types";
import { throttle } from "lodash";
import { RATE_LIMITING_TIME } from "@constants/api";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<IParsedData | null>(null);

  const fetchWeatherData = useCallback(
    throttle(async (latitude: number, longitude: number, city?: string) => {
      try {
        const response = await retrieveWeatherData(
          {
            latitude,
            longitude,
          }
          // "standard",
          // "en"
        );
        const data = parseWeatherData(response, city);
        setWeatherData(data);
        console.log("weather data response", data);
      } catch (err) {
        console.log(err);
      }
    }, RATE_LIMITING_TIME),
    []
  );

  return {
    fetchWeatherData,
    weatherData,
  };
};

export default useWeatherData;
