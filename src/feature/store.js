import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieslice"

export const store = configureStore({
    reducer:{
        movies:moviesReducer,
    },
})