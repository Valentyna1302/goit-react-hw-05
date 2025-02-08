import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { searchTrendingMovies } from "../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await searchTrendingMovies();
      console.log(data);
      setMovies(data);
    };
    getData();
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
