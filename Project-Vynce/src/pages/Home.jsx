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
      {/* Header