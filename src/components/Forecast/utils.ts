import {
  IParsedData,
  TAlert,
  TCurrentForecast,
  TDailyForecast,
  THourlyForecast,
} from "./types";

const parseCurrentForcast = (data: any): TCurrentForecast => {
  return {
    dt: data?.dt || 0,
    sunrise: data?.sunrise || 0,
    sunset: data?.sunset || 0,
    temp: data?.temp || 0,
    feels_like: data?.feels_like || 0,
    pressure: data?.pressure || 0,
    humidity: data?.humidity || 0,
    dew_point: data?.dew_point || 0,
    uvi: data?.uvi || 0,
    clouds: data?.clouds || 0,
    visibility: data?.visibility || 0,
    wind_speed: data?.wind_speed || 0,
    wind_deg: data?.wind_deg || 0,
    wind_gust: data?.wind_gust || 0,
    weather: data?.weather || [],
    snow: data?.snow,
    rain: data?.rain,
  };
};

const parseDailyForecast = (data: any): TDailyForecast => {
  return {
    dt: data?.dt || 0,
    sunrise: data?.sunrise || 0,
    sunset: data?.sunset || 0,
    moonrise: data?.moonrise || 0,
    moonset: data?.moonset || 0,
    moon_phase: data?.moon_phase || 0,
    summary: data?.summary || "",
    temp: data?.temp || {},
    feels_like: data?.feels_like || {},
    pressure: data?.pressure || 0,
    humidity: data?.humidity || 0,
    dew_point: data?.dew_point || 0,
    wind_speed: data?.wind_speed || 0,
    wind_deg: data?.wind_deg || 0,
    wind_gust: data?.wind_gust || 0,
    weather: data?.weather || [],
    clouds: data?.clouds || 0,
    pop: data?.pop || 0,
    snow: data?.snow || 0,
    rain: data?.rain || 0,
    uvi: data?.uvi || 0,
  };
};

const parseHourlyForecast = (data: any): THourlyForecast => {
  return {
    dt: data?.dt || 0,
    temp: data?.temp || 0,
    feels_like: data?.feels_like || 0,
    pressure: data?.pressure || 0,
    humidity: data?.humidity || 0,
    dew_point: data?.dew_point || 0,
    uvi: data?.uvi || 0,
    clouds: data?.clouds || 0,
    visibility: data?.visibility || 0,
    wind_speed: data?.wind_speed || 0,
    wind_deg: data?.wind_deg || 0,
    wind_gust: data?.wind_gust || 0,
    weather: data?.weather || [],
    pop: data?.pop || 0,
    snow: data?.snow,
    rain: data?.rain,
  };
};

const parseAlert = (data: any): TAlert => {
  return {
    sender_name: data?.sender_name || "",
    event: data?.data || "",
    start: data?.start || 0,
    end: data?.staendrt || 0,
    description: data?.description || "",
    tags: data?.tags || [],
  };
};

export const parseWeatherData = (data: any, city?: string): IParsedData => {
  const currentForcast = parseCurrentForcast(data.current);
  const dailyForecast = data.daily.map(parseDailyForecast);
  const hourlyForecast = data.hourly.map(parseHourlyForecast);
  const alerts = (data.alerts || []).map(parseAlert);

  return {
    currentForcast,
    dailyForecast,
    hourlyForecast,
    alerts,
    location: {
      name: city || "",
      latitude: data.lat,
      longitude: data.lon,
      timezone: data.timezone,
      localTime: calcTime(data.timezone_offset),
    },
  };
};

function calcTime(offset: number) {
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 1000 * offset);

  return nd;
}
