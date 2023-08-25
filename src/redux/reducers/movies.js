import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: []
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
});

// export action creators from slice's actions object
export const { setMovies } = moviesSlice.actions;

// export reducer
export default moviesSlice.reducer;