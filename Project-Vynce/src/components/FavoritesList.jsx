export default function FavoritesList({ favorites, onSelect }) {
  if (!favorites.length) return <p className="text-gray-500">Nenhum favorito salvo.</p>;

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {favorites.map((city) => (
        <li
          key={city}
          onClick={() => onSelect(city)}
          className="cursor-pointer bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded-lg p-3 text-center transition hover:bg-purple-200 dark:hover:bg-purple-800"
        >
          {city}
        </li>
      ))}
    </ul>
  );
}
