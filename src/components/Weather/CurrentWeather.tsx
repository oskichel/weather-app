import React, { FC } from 'react'
import { Card, Space, Typography } from "antd"
import { TFact, TInfo } from "../../store/types"
import { conditionTypes } from "./constants"
import { timeFormatter } from '../../utils/timeFormatter'

type TCurrentWeatherProps = {
 weather: {
  now_dt: number;
  info: TInfo;
  fact: TFact;
 };
}

export const CurrentWeather: FC<TCurrentWeatherProps> = ({weather: {now_dt, info, fact}}) => {
  const { Text } = Typography;

  return (
     <Card style={{width: '400px', height: '410px', marginTop: '62px'}}>
            <Space direction="vertical" style={{width: '100%'}}>
                <Space style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                  <Space direction="vertical">
                    <Text style={{fontSize: '24px'}}>Сегодня</Text>
                    <Text style={{fontSize: '48px'}}>{fact.temp}°</Text>
                    <Text>Ощущается как: {fact.feels_like}</Text>
                    <Text>{conditionTypes[fact.condition as keyof typeof conditionTypes]}</Text>
                  </Space>
                  <img src={`https://yastatic.net/weather/i/icons/funky/dark/${fact.icon}.svg`} width="124" height="124" loading="lazy" alt="weather_icon" />
                </Space>
                <Text>Сейчас: {timeFormatter(now_dt.toString())}</Text>
                <Text>Скорость ветра: {fact.wind_speed} м/с</Text>
                <Text>Атмосферное давление: {fact.pressure_mm} мм рт.ст.</Text>
                <Text>Влажность: {fact.humidity}%</Text>
                <Text>Широта: {info.lat}, долгота: {info.lon}</Text>
                <Text>Часовой пояс: {info.tzinfo.name}</Text>
            </Space>
        </Card>
  );
};
