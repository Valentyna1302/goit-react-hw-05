import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { searchTrendingMoviesById } from "../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await searchTrendingMoviesById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        height={300}
      ></img>
      <h1>
        {movie.title} ({movie.release_date.slice(0, 4)})
      </h1>
      <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <ul
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
