import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './Forecast.css';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

const Forecast = ({ city }) => {
  const { data: forecastData, isLoading, error } = useQuery(
    ['forecast', city],
    async () => {
      if (!city) return null;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    },
    {
      enabled: !!city,
      retry: 1,
    }
  );

  if (isLoading) {
    return <div className="loading">Loading forecast...</div>;
  }

  if (error) {
    return <div className="error">Error loading forecast</div>;
  }

  if (!forecastData?.list?.length) {
    return null;
  }

  // Group forecast by day (one reading per day)
  const dailyForecast = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  const getDayName = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast for {city}</h3>
      <div className="forecast-cards">
        {dailyForecast.map((item, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-day">{getDayName(item.dt)}</div>
            {item.weather?.[0]?.icon && (
              <img 
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} 
                alt={item.weather[0].description || 'Weather icon'} 
                className="forecast-icon"
              />
            )}
            <div className="forecast-temp">
              {Math.round(item.main?.temp_max)}° / {Math.round(item.main?.temp_min)}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;