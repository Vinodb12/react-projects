import React from "react";
import { useSelector } from "react-redux";
import { getAllmovies, getAllshows } from "../../feature/movies/movieslice";
import Moviecard from "../moviecard/moviecard";
import "./movielisting.css"

const Movielisting = () => {
  const Movies = useSelector(getAllmovies);
  const shows = useSelector(getAllshows);

  // let rendermovies = "";
  let rendermovies =
    Movies.Response === "True" ? (
      Movies.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div>
        <h1>{Movies.Error}</h1>
      </div>
    );
  const rendershows =
    shows.Response === "True" ? (
      shows.Search.map((shows, index) => <Moviecard key={index} data={shows} />)
    ) : (
      <div>
        <h4>{shows.Error}</h4>
      </div>
    );

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h1>movie card</h1>
        </div>
        <div className="movie-container">{rendermovies}</div>
      </div>
      <hr />
      <div className="movie-wrapper">
        <div className="movie-list">
          <h1>show card</h1>
        </div>
        <div className="movie-container">{rendershows}</div>
      </div>
    </>
  );
};

export default Movielisting;
