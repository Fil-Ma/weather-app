"use strict";
const OPENWEATHER_API_URL = import.meta.env.VITE_OPENWEATHER_API_URL;
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

type TCity = Record<"latitude" | "longitude", number | null>;

/**
 * retrieve data for a specified city
 * https://api.openweathermap.org/data/3.0/onecall?lat=
//  {lat}&lon={lon}&exclude={part}&appid={API key}
 * 
 * @param {Object} city
 * @param {String} units
 * @param {String} exclude
 * @param {String} lang
 * @returns {Object|Error}
 */
export async function retrieveWeatherData(
  city: TCity,
  dataUnits: string,
  lang: string
) {
  try {
    const { latitude, longitude } = city;

    // throw error if latitude or longitude are empty
    if (!latitude || !longitude) {
      throw new Error("you must provide latitude and longitude");
    }

    // set url for fetching data
    const urlToFetch = `${OPENWEATHER_API_URL}lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${OPENWEATHER_API_KEY}`;

    const response = await fetch(urlToFetch);
    const data = await response.json();
    return data;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}
