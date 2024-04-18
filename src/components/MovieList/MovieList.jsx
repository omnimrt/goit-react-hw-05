// src/components/MovieList/MovieList.jsx
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <h1 className={css.title}>Trending movies</h1>
      <ul>
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <li className={css.item} key={movie.id}>
              <Link
                state={location}
                to={`/movies/${movie.id}`}
                className={css.link}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
