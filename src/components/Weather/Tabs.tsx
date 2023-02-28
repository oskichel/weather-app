import { Tabs, TabsProps } from 'antd';

import { WeatherCard } from './Card';
import { dateFormatter } from './utils';
import { Weather } from '../../store/types';

type WeatherTabsProps = {
  weather: Weather;
};

export const WeatherTabs = ({weather}: WeatherTabsProps) => {
  
    const items: TabsProps['items'] = weather?.forecasts?.map((el) => {
        const id = String(el.date);
        return {
            label: `${dateFormatter(el.date)}`,
            key: id,
            children: (
                <WeatherCard
                date={el.date}
                temp_min={el.parts?.night_short?.temp}
                temp_max={el.parts?.day_short?.temp}
                temp_avg={Math.floor((el.parts.day_short.temp + el.parts?.night_short?.temp) / 2)}
                icon={el.parts?.day_short?.icon}
                condition={el.parts?.day_short?.condition}
                wind_speed={el.parts.day_short?.wind_speed}
                pressure_mm={el.parts?.day_short?.pressure_mm}
                humidity={el.parts?.day_short?.humidity}             
                 />
            ),
        };
    });

    return <Tabs defaultActiveKey="1" items={items} />;
};
