import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMoviesById } from "../../services/api";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");
  console.log(backLinkRef.current);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchMoviesById(movieId);
        setMovieData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  useEffect(() => {
    // console.log(movieData);
  }, [movieData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    movieData !== null && (
      <div>
        <div className={css.container}>
          <div>
            <Link to={backLinkRef.current}>
              <button className={css.button}>Go back</button>
            </Link>
            <img
              style={{ width: "300px" }}
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path} alt={movieData.title}`}
            />
          </div>
          <div className={css.info}>
            <h1>{movieData.title}</h1>
            <p>User rating: {movieData.vote_average}</p>
            <h2>Overview</h2>
            <p>{movieData.overview}</p>
            <h3>Genres</h3>
            <p className={css.genresList}>
              {movieData.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
        <div className={css.additional}>
          <hr />
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link className={css.link} to="cast">
                <h3>Cast</h3>
              </Link>
            </li>
            <li>
              <Link to="reviews">
                <h3>Reviews</h3>
              </Link>
              <Routes>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Routes>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default MovieDetailsPage;
