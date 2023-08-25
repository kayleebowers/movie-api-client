import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies";

export default configureStore({
    reducer: {
        movies: moviesReducer
    }
})