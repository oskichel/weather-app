import React, { FC } from 'react'
import { Layout, Space } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import { useEffect, useState } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import logo from '../../shared/image/logo.png'
import { Plate } from '../../shared/Plate'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { CurrentWeather } from './CurrentWeather'
import { WeatherTabs } from './Tabs';

export const WeatherPage: FC = () => {
    const [isShowPosition, setIsShowPosition] = useState(false)
    const dispatch = useCustomDispatch();
    const { weather } = useCustomSelector((state) => state.currentWeatherSliceReducer)
  
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            dispatch(fetchCurrentWeather(coords.latitude, coords.longitude));
            setIsShowPosition(true)
        })
        
    }, []);

    return (
        <Layout style={{ height: '100%', width: '100%' }}>
            <Header style={{ background: 'white', padding: '32px 64px', height: 'fit-content' }}>
                <img src={logo} alt="logo" width="231" height="32" loading="lazy" />
            </Header>
            {isShowPosition ? 
            (
                <Content style={{ margin: '24px 64px' }}>
                    <Space style={{ display: 'flex', justifyContent: 'center', columnGap: '64px'}}>
                        <CurrentWeather weather={weather} />
                        <WeatherTabs forecasts={weather.forecasts} />
                    </Space>
                </Content>
            ) 
            : 
                <Plate text="Пожалуйста, разрешите использование геопозиции" />
            }
        </Layout>
    );
};
