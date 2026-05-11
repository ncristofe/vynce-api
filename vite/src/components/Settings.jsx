export default function Settings({ theme, toggleTheme }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Configurações</h2>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Alternar para {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
