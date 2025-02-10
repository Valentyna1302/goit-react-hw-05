import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { searchMovies } from "../services/api";
import { Field, Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      try {
        if (!query) return;
        setIsLoading(true);
        const data = await searchMovies(query);
        setMovies(data);
      } catch {
        console.error("Not Found");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  const onSubmit = (values) => {
    searchParams.set("query", values.query);
    setSearchParams(searchParams);
  };

  const filterData = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Formik initialValues={{ query }} onSubmit={onSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {isLoading ? (
        <p>Loading...</p>
      ) : query && filterData.length === 0 ? (
        <p>No movies found for {query}</p>
      ) : (
        <MovieList movies={filterData} />
      )}
    </div>
  );
};

export default MoviesPage;
