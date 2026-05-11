import { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import FavoritesList from "../components/FavoritesList";
import Settings from "../components/Settings";

export default function Home() {
  const [city, setCity] = useState("São Paulo");
  const [favorites, setFavorites] = useState([]);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  const addFavorite = () => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
      localStorage.setItem("favorites", JSON.stringify([...favorites, city]));
    }
  };

  const selectFavorite = (favCity) => {
    setCity(favCity);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-2xl font-bold mb-6">🌤️ Vynce Weather</h1>

      {/* Clima atual */}
      <WeatherCard city={city} />

      {/* Botão para salvar cidade */}
      <button
        onClick={addFavorite}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Salvar {city} nos favoritos
      </button>

      {/* Lista de favoritos */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Favoritos</h2>
        <FavoritesList favorites={favorites} onSelect={selectFavorite} />
      </div>

      {/* Configurações */}
      <div className="mt-6">
        <Settings theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
