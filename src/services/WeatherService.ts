import axios, { AxiosResponse } from "axios";
import { Weather } from "../store/types";

export class WeatherService {
  static getCurrentWeather(lat: number, lon: number): Promise<AxiosResponse<Weather>> {
    return axios.get<Weather>('/weather', {
      params: {
        lat: lat,
        lon: lon,
        lang: 'ru_RU',
        limit: 7,
        hours: false,
        extra: false,
      },
    })
  }
}