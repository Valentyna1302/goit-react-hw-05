import axios from "axios";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const fetchMovies = async () => {
  const { results } = await axios;
};

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
