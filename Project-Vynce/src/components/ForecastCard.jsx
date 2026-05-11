export default function ForecastCard({ forecast }) {
  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
      <p className="font-semibold">{forecast.day}</p>
      <p>{forecast.temp}°C</p>
      <p className="text-sm text-gray-500">{forecast.condition}</p>
    </div>
  );
}
