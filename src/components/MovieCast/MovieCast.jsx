import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/api"; // Assuming fetchMovieCredits is correctly imported
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { cast } = await fetchMovieCredits(movieId);
        setCast(cast);
        console.log(cast);
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      {cast && (
        <div>
          {/* Render cast details here */}
          {cast.map((actor, index) => (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className={css.image}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieCast;
