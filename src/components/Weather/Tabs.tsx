import React, { FC } from 'react'
import { Tabs, TabsProps } from 'antd'
import { TForecasts } from '../../store/types'
import { WeatherCard } from './Card'
import { dateFormatter } from '../../utils/dateFormatter';

type TWeatherTabsProps = {
  forecasts: TForecasts;
};

export const WeatherTabs: FC<TWeatherTabsProps> = ({forecasts}) => {
    const items: TabsProps['items'] = forecasts?.map((el) => {
        const id = String(el.date);
        return {
            label: `${dateFormatter(el.date)}`,
            key: id,
            children: (
                <WeatherCard
                date={el.date}
                tempMin={el.parts?.night_short?.temp}
                tempMax={el.parts?.day_short?.temp}
                tempAvg={Math.floor((el.parts.day_short.temp + el.parts?.night_short?.temp) / 2)}
                icon={el.parts?.day_short?.icon}
                condition={el.parts?.day_short?.condition}
                windSpeed={el.parts.day_short?.wind_speed}
                pressureMm={el.parts?.day_short?.pressure_mm}
                humidity={el.parts?.day_short?.humidity}             
                 />
            ),
        };
    });

    return <Tabs defaultActiveKey="1" items={items} />;
};
