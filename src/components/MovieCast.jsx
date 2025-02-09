import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCastById(movieId);
      setCast(data);
    };
    getData();
  }, [movieId]);

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
