import { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import FavoritesList from "../components/FavoritesList";
import Settings from "../components/Settings";
import SearchCity from "../components/SearchCity"; // novo componente de busca

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
      const updated = [...favorites, city];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  const selectFavorite = (favCity) => {
    setCity(favCity);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
        🌤️ Vynce Weather
      </h1>

      {/* Pesquisa por cidade */}
      <SearchCity />

      {/* Clima atual */}
      <div className="mt-6">
        <WeatherCard city={city} />
      </div>

      {/* Botão para salvar cidade */}
      <button
        onClick={addFavorite}
        className="mt-4 w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Salvar {city} nos favoritos
      </button>

      {/* Lista de favoritos */}
      <div className="mt-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">⭐ Favoritos</h2>
        <FavoritesList favorites={favorites} onSelect={selectFavorite} />
      </div>

      {/* Configurações */}
      <div className="mt-6">
        <Settings theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
