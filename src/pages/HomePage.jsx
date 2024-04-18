import MovieList from "../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetchMovies();
      setMovies(results);
    };

    fetchData();
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
