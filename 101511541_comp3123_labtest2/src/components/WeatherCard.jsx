export default function weatherCard({ weather }) {
    if (!weather) return null;

    const { name, sys, weather: w, main } = weather;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="weather-card">
            <h2>{name}, {sys.country}</h2>

            <img src={iconUrl} alt="weather icon" />

            <h1>{(main.temp - 273.15).toFixed(1)}°C</h1>
            <h3>{weather[0].description}</h3>
            
            <div className="details">
            <p>Humidity: {main.humidity}%</p>
            <p>Pressure: {main.pressure} hPa</p>
            </div>
        </div>
    );
}
