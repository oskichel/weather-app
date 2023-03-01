import React, { FC } from 'react'
import { Card, Space, Typography } from 'antd'
import { conditionTypes } from './constants'
import { fullDateFormatter } from '../../utils/fullDateFormatter';

type TWeatherTabsProps = {
    date: string;
    tempMin: number;
    tempMax: number;
    tempAvg: number;
    icon: string;
    condition: string;
    windSpeed: number;
    pressureMm: number;
    humidity: number;
};

export const WeatherCard: FC<TWeatherTabsProps> = ({
    date,
    tempAvg,
    tempMax,
    tempMin,
    icon,
    condition,
    windSpeed,
    pressureMm,
    humidity,
}) => {
    const { Text } = Typography;
    return (
        <Card style={{height: '410px'}}>
            <Space align="start" style={{display: 'flex', justifyContent: 'space-between'}}>
                <Space direction="vertical">
                    <Text style={{fontSize: '24px'}}>{fullDateFormatter(date)}</Text>
                    <Text>Средняя температура: {tempAvg}°</Text>
                    <Space style={{height: '30px'}}>
                        <Text>{conditionTypes[condition as keyof typeof conditionTypes]}</Text>
                        <img src={`https://yastatic.net/weather/i/icons/funky/dark/${icon}.svg`} width="30" height="30" loading="lazy" alt="weather_icon" />
                    </Space>
                    <Text>Скорость ветра: {windSpeed} м/с</Text>
                    <Text>Атмосферное давление: {pressureMm} мм рт.ст.</Text>
                    <Text>Влажность: {humidity}%</Text>
                </Space>
                <Space direction='vertical' style={{textAlign: 'right'}}>
                    <Text style={{fontSize: '24px'}}>Днем {tempMax}°</Text>
                    <Text style={{fontSize: '16px'}}>Ночью {tempMin}°</Text>
                </Space>
            </Space>
        </Card>
    );
};
