export type TShortForecast = {
  temp: number;
  feels_like: number;
  icon: string;
  condition: string;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  prec_type: number;
  prec_strength: number;
  cloudness: number;
};

export type TForecasts = [{
    date: string;
    date_ts: number;
    week: number;
    sunrise: string;
    sunset: string;
    moon_code: number;
    moon_text: string;
    parts: {
      day_short: TShortForecast;
      night_short: TShortForecast;
    };
}];

export type TFact = {
  temp: number;
  feels_like: number;
  icon: string;
  condition: string;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  daytime: string;
  polar: boolean;
  season: string;
  prec_type: number;
  prec_strength: number;
  is_thunder: boolean;
  cloudness: number;
  obs_time: number;
  phenom_icon: string;
  phenom_condition: string;
};

export type TInfo = {
  lat: number;
  lon: number;
  tzinfo: {
    offset: number;
    name: string;
    abbr: string;
    dst: boolean;
  };
  def_pressure_mm: number;
  def_pressure_pa: number;
  url: string;
};

export type TWeather = {
  now: number;
  now_dt: number;
  info: TInfo;
  fact: TFact;
  forecasts: TForecasts;
};
