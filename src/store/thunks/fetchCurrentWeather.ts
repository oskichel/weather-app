import { WeatherService } from "../../services/WeatherService";
import { AppDispatch } from "../store";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";

export const fetchCurrentWeather = (lat: number, lon: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
    const res = await WeatherService.getCurrentWeather(lat, lon);
    if (res.status === 200) {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
    } else {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
    }
  } catch (error) {
    console.log(error);
  }
}