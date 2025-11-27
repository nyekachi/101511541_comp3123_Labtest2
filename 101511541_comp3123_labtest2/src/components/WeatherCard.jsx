export default function weatherCard({ data }) {
    if (!data) return null;

    const { name, sys, main, weather } = data;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="card">
            <h2>{name}, {sys.country}</h2>
            <img src={iconUrl} alt="weather icon" />

            <h1>{(main.temp - 273.15).toFixed(1)}°C</h1>
            <h3>{weather[0].description}</h3>

            <p>Humidity: {main.humidity}%</p>
            <p>Pressure: {main.pressure} hPa</p>
        </div>
    );
}
