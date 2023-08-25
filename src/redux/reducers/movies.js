import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: []
    },
    reducers: {
        setMovies: (state, action) => {
            state.moviesList = action.payload;
        }
    }
});

// export action creators from slice's actions object
export const { setMovies } = moviesSlice.actions;

// export reducer
export default moviesSlice.reducer;