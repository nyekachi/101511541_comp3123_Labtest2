import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {

  const [weather, setWeather] = useState(null);

  const API_KEY = "a4df56839c8620df59f4e74a1358f977";
  
  const fetchWeather = async (city) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${a4df56839c8620df59f4e74a1358f977}';
     
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      setWeather(data);
    } else {
      alert("City not found!");
    }
  };

  return (
    <div className="container">

      <h1>Weather App</h1>

      <SearchBar onSearch={fetchWeather} />

      <WeatherCard data={weather} />

    </div>
  );
}

export default App;
