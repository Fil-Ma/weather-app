/**
 * Converts temperature in kelvin to Celsius.
 *
 * @param { Number } kelvinTemperature | temperature in kelvins
 * @returns { Number } temperature in Celsius
 */
export function kelvinToCelsius(kelvinTemperature: number) {
  const celsiusTemperature = kelvinTemperature - 273.15;
  return celsiusTemperature.toFixed(1);
}

/**
 * Converts temperature in kelvin to Fahrenheit.
 *
 * @param { Number } kelvinTemperature | temperature in kelvins
 * @returns { Number } temperature in Fahrenheit
 */
export function kelvinToFahrenheit(kelvinTemperature: number) {
  const fahrenheitTemperature = (kelvinTemperature * 9) / 5 - 459.67;
  return fahrenheitTemperature.toFixed(1);
}
