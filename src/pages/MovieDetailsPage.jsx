import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchTrendingMoviesById } from "../services/api";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await searchTrendingMoviesById(moviesId);
      setMovie(data);
    };
    getData();
  }, [moviesId]);

  return (
    <div>
      Movie Detalis Page #{moviesId}
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MovieDetailsPage;
