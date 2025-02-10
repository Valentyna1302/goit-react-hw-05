import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCastById(movieId);
        setCast(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <ul>
      {cast.map((item) => (
        <li key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
            height={200}
          ></img>
          <p>{item.name}</p>
          <p> Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
