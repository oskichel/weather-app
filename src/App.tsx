import React, { FC } from 'react'
import { WeatherPage } from './components/Weather'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <WeatherPage />
    </Provider>
      
  )
}

export default App;
