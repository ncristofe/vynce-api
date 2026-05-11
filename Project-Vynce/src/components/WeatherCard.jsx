import { useEffect, useState } from "react";
import { getWeather } from "../services/weather";

export default function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const data = await getWeather(city);
      setWeather(data);
    }
    fetchWeather();
  }, [city]);

  if (!weather) return <div className="p-4">Carregando clima...</div>;

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
      <h2 className="text-xl font-semibold">{weather.name}</h2>
      <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
      <p className="text-gray-500">{weather.weather[0].description}</p>
    </div>
  );
}
