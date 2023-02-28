import { Layout, Space } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import logo from '../../shared/image/logo.png';
import { Plate } from '../../shared/Plate';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { CurrentWeather } from './CurrentWeather';

import { WeatherTabs } from './Tabs';

export const WeatherPage = () => {
    const [isShowPosition, setIsShowPosition] = useState(false)
    const dispatch = useCustomDispatch();
    const { weather } = useCustomSelector((state) => state.currentWeatherSliceReducer)
  
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            dispatch(fetchCurrentWeather(position.coords.latitude, position.coords.longitude));
            setIsShowPosition(true)
            console.log(position)
        })
        
    }, []);

    return (
        <Layout style={{ height: '100%', width: '100%' }}>
            <Header style={{ background: 'white', padding: '32px 64px', height: 'fit-content' }}>
                <img src={logo} alt="logo" />
            </Header>
            {isShowPosition ? (<Content style={{ margin: '24px 64px' }}>
                <Space style={{ display: 'flex', justifyContent: 'center', columnGap: '64px'}}>
                    <CurrentWeather weather={weather} />
                    <WeatherTabs weather={weather} />
                </Space>
            </Content>) : <Plate text="Пожалуйста, разрешите использование геопозиции" />}
        </Layout>
    );
};
