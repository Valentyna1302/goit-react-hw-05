import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { searchTrendingMovies } from "../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await searchTrendingMovies();
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

export default HomePage;
