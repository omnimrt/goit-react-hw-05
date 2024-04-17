import axios from "axios";

export const fetchMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5MjliMTEzMjkxNGMzZWNjNGU5NGE3YmY2Y2Q1NiIsInN1YiI6IjY2MWNkYjI2NmQxYmIyMDE0OTM4MjAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rz5XLFCtlL2H39DB2v4wwq6bpB6Grb0rBHH7WbYGRY",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchMoviesById = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5MjliMTEzMjkxNGMzZWNjNGU5NGE3YmY2Y2Q1NiIsInN1YiI6IjY2MWNkYjI2NmQxYmIyMDE0OTM4MjAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rz5XLFCtlL2H39DB2v4wwq6bpB6Grb0rBHH7WbYGRY",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchMovieCredits = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5MjliMTEzMjkxNGMzZWNjNGU5NGE3YmY2Y2Q1NiIsInN1YiI6IjY2MWNkYjI2NmQxYmIyMDE0OTM4MjAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rz5XLFCtlL2H39DB2v4wwq6bpB6Grb0rBHH7WbYGRY",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchMovieReviews = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5MjliMTEzMjkxNGMzZWNjNGU5NGE3YmY2Y2Q1NiIsInN1YiI6IjY2MWNkYjI2NmQxYmIyMDE0OTM4MjAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rz5XLFCtlL2H39DB2v4wwq6bpB6Grb0rBHH7WbYGRY",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchMovieByQuery = async (query) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: query,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5MjliMTEzMjkxNGMzZWNjNGU5NGE3YmY2Y2Q1NiIsInN1YiI6IjY2MWNkYjI2NmQxYmIyMDE0OTM4MjAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5rz5XLFCtlL2H39DB2v4wwq6bpB6Grb0rBHH7WbYGRY",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};
