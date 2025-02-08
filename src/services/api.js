import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2FkZWExYTc5ZGQwZTNjZWY4ZjM3YzkyMmJhOWNhYyIsIm5iZiI6MTczOTAyMTE1My42NDcsInN1YiI6IjY3YTc1YjYxNTcxZDcwN2YxNGM4YjFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JvUaBfAkL5SNVkbbvoLZJl81LESkAGAkey-vBAv-58k`;
axios.defaults.params = {
  include_adult: false,
  language: "en-US",
};

export const searchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  return data.results;
};

export const searchTrendingMoviesById = async (moviesId) => {
  const { data } = await axios.get(`/movie/${moviesId}`);
  console.log(data);

  return data;
};
