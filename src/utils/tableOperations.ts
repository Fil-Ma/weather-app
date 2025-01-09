import { TDailyForecast, THourlyForecast } from "@components/Forecast/types";
import { normalizeData } from "./dataNormalization";
import { normalizeHourlyData } from "./dataNormalization";
import { TUserLanguage } from "@contexts/LanguageContext/types";
/**
 * Creates rows data from weather daily data object.
 *
 * @param {Object} dailyData
 * @returns {Object} object of arrays
 */
export function createTableData(
  dailyDataObject: TDailyForecast[],
  language: TUserLanguage
) {
  const columnLabels: string[] = [];
  const rows: Record<string, any[]> = {
    image: [],
    description: [],
    precipitationProbability: [],
    rain: [],
    snow: [],
    temperatureCelsius: [], // array min max
    feelsLikeCelsius: [], // array day night
    temperatureFahrenheit: [], // array
    feelsLikeFahrenheit: [], // array
    pressure: [],
    humidity: [],
    windSpeed: [],
    windDirection: [],
    sunrise: [],
    sunset: [],
    moonrise: [],
    moonset: [],
    moonphase: [],
  };

  dailyDataObject.forEach((day) => {
    const normalizedObject = normalizeData(day, language);

    // column labels
    columnLabels.push(normalizedObject.date);

    // status column
    rows.image.push(normalizedObject.statusImage);
    rows.description.push(normalizedObject.statusDescription);

    // precipitation, rain, snow volumes
    rows.precipitationProbability.push(
      normalizedObject.precipitationProbability
    );
    rows.rain.push(normalizedObject?.rain ? normalizedObject.rain : "-");
    rows.snow.push(normalizedObject?.snow ? normalizedObject.snow : "-");

    // temperatures
    rows.temperatureCelsius.push(normalizedObject.temperatureCelsius);
    rows.temperatureFahrenheit.push(normalizedObject.temperatureFahrenheit);
    rows.feelsLikeCelsius.push(normalizedObject.feelsLikeCelsius);
    rows.feelsLikeFahrenheit.push(normalizedObject.feelsLikeFahrenheit);

    rows.pressure.push(normalizedObject.pressure);
    rows.humidity.push(normalizedObject.humidity);
    rows.windSpeed.push(normalizedObject.windSpeed);
    rows.windDirection.push(normalizedObject.windDirection);

    rows.sunrise.push(normalizedObject.sunrise);
    rows.sunset.push(normalizedObject.sunset);
    rows.moonrise.push(normalizedObject.moonrise);
    rows.moonset.push(normalizedObject.moonset);
    rows.moonphase.push(normalizedObject.moonphase);
  });

  return { columnLabels, rows };
}

/**
 * Creates rows data from weather hourly data object.
 *
 * @param {Object} hourlyData
 * @returns {Object} object of arrays
 */
export function createHourlyTableData(
  hourlyDataObject: THourlyForecast[],
  language: TUserLanguage
) {
  const columnLabels: string[] = [];
  const rows: Record<string, any[]> = {
    image: [],
    description: [],
    precipitationProbability: [],
    rain: [],
    snow: [],
    temperatureCelsius: [], // array min max
    feelsLikeCelsius: [], // array day night
    temperatureFahrenheit: [], // array
    feelsLikeFahrenheit: [], // array
    // pressure: [],
    humidity: [],
    // windSpeed: [],
    //windDirection: []
  };

  hourlyDataObject.forEach((hour) => {
    const normalizedObject = normalizeHourlyData(hour, language);

    // column labels
    columnLabels.push(normalizedObject.time);

    // status column
    rows.image.push(normalizedObject.statusImage);
    rows.description.push(normalizedObject.statusDescription);

    // precipitation, rain, snow volumes
    rows.precipitationProbability.push(
      normalizedObject.precipitationProbability
    );
    rows.rain.push(normalizedObject?.rain ? normalizedObject.rain : "-");
    rows.snow.push(normalizedObject?.snow ? normalizedObject.snow : "-");

    // temperatures
    rows.temperatureCelsius.push(normalizedObject.temperatureCelsius);
    rows.temperatureFahrenheit.push(normalizedObject.temperatureFahrenheit);
    rows.feelsLikeCelsius.push(normalizedObject.feelsLikeCelsius);
    rows.feelsLikeFahrenheit.push(normalizedObject.feelsLikeFahrenheit);

    // rows.pressure.push(normalizedObject.pressure)
    rows.humidity.push(normalizedObject.humidity);
    // rows.windSpeed.push(normalizedObject.windSpeed)
    // rows.windDirection.push(normalizedObject.windDirection)
  });

  return { columnLabels, rows };
}
