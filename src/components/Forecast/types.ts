export type TWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type OneHourPrecipitation = {
  "1h": number;
};

export type TCurrentForecast = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: TWeather[];
  snow: OneHourPrecipitation | undefined;
  rain: OneHourPrecipitation | undefined;
};

type DailyTemperatureParam = "day" | "min" | "max" | "night" | "eve" | "morn";
type FeelsLikeParam = "day" | "night" | "eve" | "morn";

export type TDailyForecast = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: Record<DailyTemperatureParam, number>;
  feels_like: Record<FeelsLikeParam, number>;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: TWeather[];
  clouds: number;
  pop: number;
  snow: number;
  rain: number;
  uvi: number;
};

export type THourlyForecast = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: TWeather[];
  pop: number;
  snow: OneHourPrecipitation | undefined;
  rain: OneHourPrecipitation | undefined;
};

export type TAlert = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
};

export type TLocation = {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  localTime: Date;
};

export interface IParsedData {
  currentForcast: TCurrentForecast;
  dailyForecast: TDailyForecast[];
  hourlyForecast: THourlyForecast[];
  alerts: TAlert[];
  location: TLocation;
}
