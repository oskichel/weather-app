import { Card, Space, Typography } from "antd";
import { Weather } from "../../store/types";
import { conditionTypes } from "./constants";
import { timeFormatter } from "./utils";

type CurrentWeatherProps = {
 weather: Weather;

}

export const CurrentWeather = ({weather}: CurrentWeatherProps) => {
  const { Text } = Typography;
  const info = weather.info;
  const factWeather = weather.fact;

  return (
     <Card style={{width: '400px', height: '410px', marginTop: '62px'}}>
            <Space direction="vertical" style={{width: '100%'}}>
                <Space style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                  <Space direction="vertical">
                    <Text style={{fontSize: '24px'}}>Сегодня</Text>
                    <Text style={{fontSize: '48px'}}>{factWeather.temp}°</Text>
                    <Text>Ощущается как: {factWeather.feels_like}</Text>
                    <Text>{conditionTypes[factWeather.condition as keyof typeof conditionTypes]}</Text>
                  </Space>
                  <img src={`https://yastatic.net/weather/i/icons/funky/dark/${factWeather.icon}.svg`} width="124px"/>
                </Space>
                <Text>Сейчас: {timeFormatter(weather.now_dt.toString())}</Text>
                <Text>Скорость ветра: {factWeather.wind_speed} м/с</Text>
                <Text>Атмосферное давление: {factWeather.pressure_mm} мм рт.ст.</Text>
                <Text>Влажность: {factWeather.humidity}%</Text>
                <Text>Широта: {info.lat}, долгота: {info.lon}</Text>
                <Text>Часовой пояс: {info.tzinfo.name}</Text>
            </Space>
        </Card>
  );
};
