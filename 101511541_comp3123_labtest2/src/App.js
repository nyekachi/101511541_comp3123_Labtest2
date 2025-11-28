import { useState } from 'react';
import axios from "axios";
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import {useQuery} from "@tanstack/react-query";
import './App.css';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("Toronto");

  const {data: weatherData, isLoading, error, refetch} = useQuery(
    ['weather', city],
    
    async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      return response.data;
    },
    {
      enabled: !!city,
      refetchOnWindowFocus: false,
    }
  );

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return(
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>

        <SearchBar onSearch={handleSearch} />

        {isLoading ? (
          <div className="loading">Loading...</div>
        ): error ? (
          <div className="error">Error fetching weather data</div>
        ): weatherData ?(
          <>
            <WeatherCard data={weatherData} />
            <Forecast city={city} />
          </>
        
        ): null}
        
      </div>
    </div>
  );
}

export default App;