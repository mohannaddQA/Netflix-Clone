import MovieList from "./movieList/MovieList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [movieList, setmovieList] = useState([]);
  async function getMovieList() {
    const movieList = await axios.get(
      // `http://localhost:3002/trending`
      `https://movies-library-dcw0.onrender.com/trending`
    );
    setmovieList(movieList.data);
  }

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <MovieList movieList={movieList} />;
    </>
  );
}
