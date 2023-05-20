import { useEffect, useState } from "react";
import Movie from "../../home/movieList/Movie/Movie";

export default function MovieList(props) {
  // const [mappedMovieList, setmappedMovieList] = useState([]);

  // const mappedMovieList_ = props.movieList.map((movie) => {
  //   return {
  //     title: movie.title,
  //     img: movie.poster_path,
  //     summary: movie.overiew,
  //   };
  // });

  // function MM() {
  //   setmappedMovieList(mappedMovieList_);
  // }
  // useEffect(() => {
  //   MM();
  // }, []);

  return (
    <>
      <Movie movieList={props.movieList} />
    </>
  );
}
