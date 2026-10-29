import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "Recipe Management App\src\pages\Home.jsx";
import AddRecipe from "Recipe Management App\src\pages\AddRecipe.jsx";
import RecipeDetails from "Recipe Management App\src\pages\RecipeDetails.jsx";
import Favorites from "Recipe Management App\src\pages\Favorites.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route
            path="/recipe/:id"
            element={<RecipeDetails />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>🍋 RecipeBook</span>
        <p>Made with love and a little extra seasoning.</p>
      </footer>
    </div>
  );
}
