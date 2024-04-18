import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
// import HomePage from "./pages/HomePage";
// import MoviesPage from "./pages/MoviePage/MoviesPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import Navigation from "./components/Navigation/Navigation";
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviePage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
