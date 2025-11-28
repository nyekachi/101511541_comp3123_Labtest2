import React from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import './Forecast.css';

const Forecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  // Grouping forecast by day
  const dailyForecast = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  const getDayName = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {dailyForecast.map((item, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-day">{getDayName(item.dt)}</div>
            <img 
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} 
              alt={item.weather[0].description} 
              className="forecast-icon"
            />
            <div className="forecast-temp">
              {Math.round(item.main.temp_max)}° / {Math.round(item.main.temp_min)}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;