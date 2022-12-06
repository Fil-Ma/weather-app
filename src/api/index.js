"use strict";
const OPENWEATHER_API_URL = process.env.OPENWEATHER_API_URL;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

const GEOCODE_API_URL = process.env.GEOCODE_API_URL;
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

/**
 * retrieve data for a specified city
 * https://api.openweathermap.org/data/3.0/onecall?lat=
//  {lat}&lon={lon}&exclude={part}&appid={API key}
 * 
 * @param {Object} city | latitude and longitude
 * @param {String} units  | standard, metric, imperial
 * @param {String} exclude | current, minutely, hourly, daily, alerts
 * @param {String} lang
 * @returns {Object|Error} returns data retrieved from api
 */
export async function retrieveWeatherData(city, dataUnits, lang) {
    try {
        const { latitude, longitude } = city;

        // throw error if latitude or longitude are empty
        if (!latitude || !longitude) {
            throw new Error("you must provide latitude and longitude")
        }

        // set url for fetching data
        const urlToFetch = `${OPENWEATHER_API_URL}lat=${latitude}&lon=${longitude}&exclude=minutely&units=${dataUnits}&lang=${lang}&appid=${OPENWEATHER_API_KEY}`;
        
        const response = await fetch(urlToFetch);

        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error(error);
    }
}

/**
 * geo code city name into coordinates
 * http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}
 * &limit={limit}&appid={API key}
 * 
 * @param {String} cityName
 * @returns {Object|Error} coordinates of city
 */
export async function geocodeCityName(cityName) {
    try {
        const urlToFetch = `${GEOCODE_API_URL}q=${cityName}&limit=5&appid=${GEOCODE_API_KEY}`
        
        const response = await fetch(urlToFetch);

        const data = await response.json();

        if (Array.isArray(data)) {
            throw new Error("invalid city name")
        }
        
        return {
            latitude: data.lat,
            longitude: data.lon
        };
    
    } catch (error) {
        throw new Error(error);
    }
}