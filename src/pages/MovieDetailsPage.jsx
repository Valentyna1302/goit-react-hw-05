import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { searchTrendingMoviesById } from "../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await searchTrendingMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return movie ? (
    <div>
      <Link to={goBackUrl.current}>Go back</Link>
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
  ) : (
    <p>Not Found </p>
  );
};

export default MovieDetailsPage;
