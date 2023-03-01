import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { TWeather } from "../types"

type TCurrentWeather = {
  weather: TWeather;
  isLoading: boolean;
  response: TResponseData;
};

type TResponseData = {
  status: number;
  message: string;
};

const initialState: TCurrentWeather = {
  weather: {
    now: 0,
    now_dt: 0,
    info: {
      lat: 55.4424,
    lon: 37.3636,
    tzinfo: {
      offset: 10800,
      name: "Europe/Moscow",
      abbr: "MSK",
      dst: false,
    },
    def_pressure_mm: 746,
    def_pressure_pa: 994,
    url: "https://yandex.ru/pogoda/moscow",
    },
    fact: {
      temp: 20,
      feels_like: 21,
      icon: "ovc_+sn",
      condition: "string",
      wind_speed: 2,
      wind_gust: 5.9,
      wind_dir: "string",
      pressure_mm: 745,
      pressure_pa: 994,
      humidity: 83,
      daytime: "string",
      polar: false,
      season: "summer",
      prec_type: 1,
      prec_strength: 0.25,
      is_thunder: false,
      cloudness: 1,
      obs_time: 1470214800,
      phenom_icon: "string",
      phenom_condition: "string",
    },
    forecasts: [
      {
        date: "string",
        date_ts: 1471035600,
        week: 33,
        sunrise: "string",
        sunset: "string",
        moon_code: 13,
        moon_text: "string",
        parts: {
          day_short: {
            temp: 0,
            feels_like: 0,
            icon: "ovc_+sn",
            condition: "string",
            wind_speed: 0,
            wind_gust: 0,
            wind_dir: "string",
            pressure_mm: 744,
            pressure_pa: 995,
            humidity: 89,
            prec_type: 0,
            prec_strength: 0,
            cloudness: 0,
          },
          night_short: {
            temp: 0,
            feels_like: 0,
            icon: "string",
            condition: "string",
            wind_speed: 0,
            wind_gust: 0,
            wind_dir: "string",
            pressure_mm: 746,
            pressure_pa: 995,
            humidity: 85,
            prec_type: 0,
            prec_strength: 0,
            cloudness: 0,
          },
        },
      },
    ],
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  }
}

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<TWeather>>) {
      state.weather = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<TWeather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    }
  }
})

export default currentWeatherSlice.reducer;
