import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieapi from "../../common/api/movieapi";
import { FetcAsynchmovies, FetchAsyncshows, FetchshowsORmovie } from "../../feature/movies/movieslice";
import Movielisting from "../movielisting/movielisting";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(FetcAsynchmovies());
   dispatch(FetchAsyncshows());
   
  }, [dispatch]);

  return (
    <div>
      <Movielisting />
    </div>
  );
};

export default Home;
