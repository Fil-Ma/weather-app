import { getWindDirection, convertToKmh } from "./windOperations";
import { dateToString } from "./dateOperations";
import { kelvinToCelsius, kelvinToFahrenheit } from "./temperatureOperations";
import { TUserLanguage } from "@contexts/LanguageContext/types";
import {
  TCurrentForecast,
  TDailyForecast,
  THourlyForecast,
} from "@components/Forecast/types";

type NormalizeData = (
  dataObject: TCurrentForecast | TDailyForecast,
  language: TUserLanguage
) => any;

type TemperatureObj = Record<
  "tempC" | "tempF",
  string | undefined | Record<"min" | "max", string>
>;

/**
 * Normalizes datas from API
 *
 * @param {Object} dataObject
 * @param {String} language
 * @returns {Object} Normalized data
 */
export const normalizeData: NormalizeData = (dataObject, language = "en") => {
  // current date time
  const dateTime = dateToString(dataObject.dt, language);

  // current status
  const image = dataObject.weather[0].icon;
  const description = dataObject.weather[0].description;

  // precipitation probability
  let precipitationProb = 0;
  if ("pop" in dataObject) {
    precipitationProb = Math.round(dataObject.pop * 100);
  }

  // actual temperatures
  let temperature: TemperatureObj = {
    tempC: undefined,
    tempF: undefined,
  };
  if (typeof dataObject.temp === "number") {
    temperature.tempC = kelvinToCelsius(dataObject.temp);
    temperature.tempF = kelvinToFahrenheit(dataObject.temp);
  } else {
    temperature.tempC = {
      min: kelvinToCelsius(dataObject.temp.min),
      max: kelvinToCelsius(dataObject.temp.max),
    };
    temperature.tempF = {
      min: kelvinToFahrenheit(dataObject.temp.min),
      max: kelvinToFahrenheit(dataObject.temp.max),
    };
  }

  // feels like temperatures
  let feelsLike: TemperatureObj = {
    tempC: undefined,
    tempF: undefined,
  };
  if (typeof dataObject.feels_like === "number") {
    feelsLike.tempC = kelvinToCelsius(dataObject.feels_like);
    feelsLike.tempF = kelvinToFahrenheit(dataObject.feels_like);
  } else {
    feelsLike.tempC = {
      min: kelvinToCelsius(dataObject.feels_like.day),
      max: kelvinToCelsius(dataObject.feels_like.night),
    };
    feelsLike.tempF = {
      min: kelvinToFahrenheit(dataObject.feels_like.day),
      max: kelvinToFahrenheit(dataObject.feels_like.night),
    };
  }

  // wind speed and direction
  const windSpeed = convertToKmh(dataObject.wind_speed);
  const windDirection = getWindDirection(dataObject.wind_deg);

  // sunrise and sunset
  const sunriseDateTime = dateToString(dataObject.sunrise, language);
  const sunsetDateTime = dateToString(dataObject.sunset, language);

  // moonrise and moonset
  let moonriseTime = "";
  if ("moonrise" in dataObject) {
    moonriseTime = dateToString(dataObject.moonrise, language).time;
  }
  let moonseteTime = "";
  if ("moonset" in dataObject) {
    moonseteTime = dateToString(dataObject.moonset, language).time;
  }

  let moonPhase = 0;
  if ("moon_phase" in dataObject) {
    moonPhase = dataObject.moon_phase;
  }

  return {
    date: dateTime.date,
    time: dateTime.time,
    statusImage: image,
    statusDescription: description,
    precipitationProbability: precipitationProb,
    rain: dataObject?.rain,
    snow: dataObject?.snow,
    temperatureCelsius: temperature.tempC,
    temperatureFahrenheit: temperature.tempF,
    feelsLikeCelsius: feelsLike.tempC,
    feelsLikeFahrenheit: feelsLike.tempF,
    pressure: dataObject.pressure,
    humidity: dataObject.humidity,
    windSpeed,
    windDirection,
    sunrise: sunriseDateTime.time,
    sunset: sunsetDateTime.time,
    moonrise: moonriseTime,
    moonset: moonseteTime,
    moonphase: moonPhase,
  };
};

type NormalizeHourlyData = (
  dataObject: THourlyForecast,
  language: TUserLanguage
) => any;

/**
 * Normalizes datas from API | hourly data
 *
 * @param {Object} dataObject
 * @param {String} language
 * @returns {Object} Normalized data
 */
export const normalizeHourlyData: NormalizeHourlyData = (
  dataObject,
  language = "en"
) => {
  // current date time
  const dateTime = dateToString(dataObject.dt, language);

  // current status
  const image = dataObject.weather[0].icon;
  const description = dataObject.weather[0].description; // language

  // precipitation probability
  let precipitationProb = 0;
  if (dataObject?.pop) {
    precipitationProb = Math.round(dataObject.pop * 100);
  }

  // rain and snow volumes
  let rain, snow;
  if (dataObject?.rain) {
    rain = dataObject.rain["1h"];
  } else if (dataObject?.snow) {
    snow = dataObject.snow["1h"];
  }

  // actual temperatures
  const temperature = {
    tempC: kelvinToCelsius(dataObject.temp),
    tempF: kelvinToFahrenheit(dataObject.temp),
  };

  // feels like temperatures
  const feelsLike = {
    tempC: kelvinToCelsius(dataObject.feels_like),
    tempF: kelvinToFahrenheit(dataObject.feels_like),
  };

  // wind speed and direction
  const windSpeed = convertToKmh(dataObject.wind_speed);
  const windDirection = getWindDirection(dataObject.wind_deg);

  return {
    date: dateTime.date,
    time: dateTime.time,
    statusImage: image,
    statusDescription: description,
    precipitationProbability: precipitationProb,
    rain,
    snow,
    temperatureCelsius: temperature.tempC,
    temperatureFahrenheit: temperature.tempF,
    feelsLikeCelsius: feelsLike.tempC,
    feelsLikeFahrenheit: feelsLike.tempF,
    pressure: dataObject.pressure,
    humidity: dataObject.humidity,
    windSpeed,
    windDirection,
  };
};
