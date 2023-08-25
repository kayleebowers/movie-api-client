import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies";
import userReducer from "./reducers/user";

export default configureStore({
    reducer: {
        movies: moviesReducer,
        user: userReducer
    }
});