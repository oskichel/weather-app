import { Card, Space, Typography } from 'antd';
import { conditionTypes } from './constants';
import { longDateFormatter } from './utils';

type WeatherTabsProps = {
    date: string;
    temp_min: number;
    temp_max?: number;
    temp_avg?: number;
    icon?: string;
    condition: string;
    wind_speed: number;
    pressure_mm: number;
    humidity: number;
};

export const WeatherCard = ({
    date,
    temp_avg,
    temp_max,
    temp_min,
    icon,
    condition,
    wind_speed,
    pressure_mm,
    humidity,
}: WeatherTabsProps) => {
    const { Text } = Typography;
    return (
        <Card style={{height: '410px'}}>
            <Space align="start" style={{display: 'flex', justifyContent: 'space-between'}}>
                <Space direction="vertical">
                    <Text style={{fontSize: '24px'}}>{longDateFormatter(date)}</Text>
                    <Text>Средняя температура: {temp_avg}°</Text>
                    <Space style={{height: '30px'}}>
                        <Text>{conditionTypes[condition as keyof typeof conditionTypes]}</Text>
                        <img src={`https://yastatic.net/weather/i/icons/funky/dark/${icon}.svg`} height="30px"/>
                    </Space>
                    <Text>Скорость ветра: {wind_speed} м/с</Text>
                    <Text>Атмосферное давление: {pressure_mm} мм рт.ст.</Text>
                    <Text>Влажность: {humidity}%</Text>
                </Space>
                <Space direction='vertical' style={{textAlign: 'right'}}>
                    <Text style={{fontSize: '24px'}}>Днем {temp_max}°</Text>
                    <Text style={{fontSize: '16px'}}>Ночью {temp_min}°</Text>
                </Space>
            </Space>
        </Card>
    );
};
