export default function FavoritesList({ favorites, onSelect }) {
  if (favorites.length === 0) {
    return <p className="text-gray-500">Nenhuma cidade favorita ainda.</p>;
  }

  return (
    <ul className="space-y-2">
      {favorites.map((city, index) => (
        <li
          key={index}
          className="cursor-pointer hover:text-blue-500"
          onClick={() => onSelect(city)}
        >
          {city}
        </li>
      ))}
    </ul>
  );
}
