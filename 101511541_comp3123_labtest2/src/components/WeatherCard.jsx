export default function WeatherCard({ weather }) {
    if (!weather || !weather.weather || !weather.weather[0]) return null;

    const { name, sys, weather: [weatherInfo], main } = weather;
    const iconUrl = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;

    return (
        <div className="weather-card">
            <h2>{name}, {sys.country}</h2>

            <img src={iconUrl} alt="weather icon" />

            <h1>{(main.temp - 273.15).toFixed(1)}°C</h1>
            <h3>{weatherInfo.description}</h3>
            
            <div className="details">
                <p>Humidity: {main.humidity}%</p>
                <p>Pressure: {main.pressure} hPa</p>
            </div>
        </div>
    );
}
