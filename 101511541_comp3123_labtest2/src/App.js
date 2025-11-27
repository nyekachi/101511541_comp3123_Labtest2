import { useState } from 'react';
import axios from "axios";
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import {useQuery} from "@tanstack/react-query";
import './App.css';

const API_KEY = "a4df56839c8620df59f4e74a1358f977";
function App() {
  const [city, setCity] = useState("Toronto");

  const fetchWeather = async () => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${a4df56839c8620df59f4e74a1358f977}');
    return response.data;
  };

  const {data, error, isLoading, refetch} = useQuery({
    queryKey: ['weather', city],
    queryFn: fetchWeather,
    enabled: true,
  });

  const handleSearch = (newCity) => {
    setCity(newCity);
    refetch();
  };
  
  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <SearchBar onSearch={handleSearch} />

      {isLoading && <p>Loading...</p>}
      {error && <p>City not found!</p>}

      {data && <WeatherCard weather={data} />}
    </div>
  );
}

export default App;