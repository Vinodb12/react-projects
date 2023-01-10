import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieapi from "../../common/api/movieapi";
import { Apikey } from "../../common/api/movieapikey";
export const FetcAsynchmovies = createAsyncThunk(
  "movies/FetcAsynchmovies",
  async () => {
    const Movietext = "Harry";
    const response = await movieapi.get(
      `?apikey=${Apikey}&s=${Movietext}&type=movie`
    );
    return response.data;
  }
);
export const FetchAsyncshows = createAsyncThunk(
  "shows/FetchAsyncshows",
  async () => {
    const showtext = "Harry";
    const response = await movieapi.get(
      `?apikey=${Apikey}&s=${showtext}&type=series`
    );
    return response.data;
  }
);
export const FetchshowsORmovie = createAsyncThunk(
  "movie/FetchshowsORmovie",
  async (id) => {
    const response = await movieapi.get(`?apiKey=${Apikey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  moviesOrshows: {},
};
const movieslice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addmovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [FetcAsynchmovies.pending]: () => {
      console.log("pending");
    },
    [FetcAsynchmovies.fulfilled]: (state, { payload }) => {
      console.log("sucessfull");
      return {
        ...state,
        movies: payload,
      };
    },
    [FetcAsynchmovies.rejected]: () => {
      console.log("rejected");
    },
    [FetchAsyncshows.pending]: () => {
      console.log("pending");
    },
    [FetchAsyncshows.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        shows: payload,
      };
    },
    [FetchshowsORmovie.rejected]: () => {
      console.log("show or movie rejected");
    },
    [FetchshowsORmovie.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        moviesOrshows: payload,
      };
    },
  },
});
export const { addmovies } = movieslice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllshows = (state) => state.movies.shows;
export const getAllshowsandmovies = (state) => state.movies.moviesOrshows;
export default movieslice.reducer;
