import { useState, useEffect } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">⚙️ Configurações</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Alternar para {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
