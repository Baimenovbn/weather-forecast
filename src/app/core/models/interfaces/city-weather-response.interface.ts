export interface ICityWeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  hourly: IHourlyData[];
  daily: IDailyData[];
}

export interface ICommonData {
  dt: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
  wind_gust: number;
  weather: IWeatherData[];
}

export interface IHourlyData extends ICommonData {
  temp: number;
  feels_like: number;
  visibility: number;
}

export interface IDailyData extends ICommonData{
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  },
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  },
}

export interface IWeatherData {
  id: number,
  main: string,
  description: string,
  icon: string;
}
