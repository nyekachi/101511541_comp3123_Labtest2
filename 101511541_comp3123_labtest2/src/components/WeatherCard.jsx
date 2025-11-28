function WeatherCard({ weather }) {
    if (!weather || !weather.weather || !weather.weather[0]) return null;

    const { name, sys, weather: [weatherInfo], main, wind } = weather;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;

    return (
        <div className="weather-card">
            <h2>{name}, {sys.country}</h2>
            <img src={iconUrl} alt="weather icon" />
            <h1>{(main.temp - 273.15).toFixed(1)}°C</h1>
            <h3>{weatherInfo.description}</h3>
            
            <div className="weather-details">
                <div className="detail-item">
                    <span className="detail-label">Humidity</span>
                    <span className="detailed-value">{main.humidity}%</span>
                </div>

                <div className="detail-item">
                    <span className="detail-label">Wind</span>
                    <span className="detailed-value">{wind ? Math.round(wind.speed * 3.6) : 'N/A'} km/h</span>
                </div>

                <div className="detail-item">
                    <span className="detail-label">Pressure</span>
                    <span className="detailed-value">{main.pressure} hPa</span>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
