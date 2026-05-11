import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-200 dark:bg-gray-800">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favoritos</Link>
        <Link to="/settings">Configurações</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
