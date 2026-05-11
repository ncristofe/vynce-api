export default function WeatherCard({ city, weather }) {
  if (!weather) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center gap-2 transition hover:scale-105">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
        {city}
      </h2>
      <p className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400">
        {Math.round(weather.main.temp)}°C
      </p>
      <p className="capitalize text-gray-600 dark:text-gray-300">
        {weather.weather[0].description}
      </p>
    </div>
  );
}
