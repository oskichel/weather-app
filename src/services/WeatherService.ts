import axios, { AxiosResponse } from "axios"
import { TWeather } from "../store/types"

export class WeatherService {
  static getCurrentWeather(lat: number, lon: number): Promise<AxiosResponse<TWeather>> {
    return axios.get<TWeather>('/weather', {
      params: {
        lat,
        lon,
        lang: 'ru_RU',
        limit: 7,
        hours: false,
        extra: false,
      },
    })
  }
}