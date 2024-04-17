import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetchMovies();
      setMovies(results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <ul>
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} className={css.link}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
