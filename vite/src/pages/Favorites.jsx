import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  if (favorites.length === 0) {
    return <p className="p-6 text-gray-500">Nenhuma cidade favorita ainda.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">❤️ Favoritos</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {favorites.map((city, index) => (
          <WeatherCard key={index} city={city} />
        ))}
      </div>
    </div>
  );
}
