import { useState } from "react";
import { getWeather, getForecast } from "../services/weather";

export default function SearchCity() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async () => {
    try {
      const w = await getWeather(city);
      const f = await getForecast(city);
      setWeather(w);
      setForecast(f);
    } catch (error) {
      alert("Cidade não encontrada!");
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Digite o nome da cidade..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Buscar
        </button>
      </div>

      {weather && (
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="text-xl font-bold">{weather.name}</h2>
          <p>🌡️ {weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}

      {forecast && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Previsão</h3>
          <div className="grid grid-cols-2 gap-2">
            {forecast.list.slice(0, 6).map((item) => (
              <div
                key={item.dt}
                className="bg-gray-100 p-2 rounded text-sm text-center"
              >
                <p>{new Date(item.dt_txt).toLocaleString("pt-BR", { weekday: "short", hour: "2-digit" })}</p>
                <p>{item.main.temp}°C</p>
                <p>{item.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
