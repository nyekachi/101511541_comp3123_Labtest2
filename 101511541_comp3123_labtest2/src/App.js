import { useState } from 'react';
import axios from "axios";
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { useQuery } from "@tanstack/react-query";
import './App.css';

const API_KEY = "a4df56839c8620df59f4e74a1358f977";

function App() {
  const [city, setCity] = useState("Toronto");

  const { data: weatherData, isLoading, error } = useQuery(
    ['weather', city],
    async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
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

  return (
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>
        
        <SearchBar onSearch={handleSearch} />

        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">Error fetching weather data</div>
        ) : weatherData ? (
          <WeatherCard weather={weatherData} />
        ) : null}
      </div>
    </div>
  );
}

export default App;