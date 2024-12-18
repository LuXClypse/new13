import React, { useState, useEffect } from 'react';
import { fetchWeather } from './api';

function App() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await fetchWeather('Tbilisi');
                setWeather(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getWeather();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="App">
            <h1>Weather in {weather.location.name}</h1>
            <p>Temperature: {weather.current.temp_c}°C</p>
            <p>Condition: {weather.current.condition.text}</p>
            <p>Humidity: {weather.current.humidity}%</p>
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
        </div>
    );
}

export default App;
