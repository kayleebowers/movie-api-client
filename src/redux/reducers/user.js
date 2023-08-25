import { createSlice } from "@reduxjs/toolkit";

//set localStorage as default values of user/token
const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("token");

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: storedUser ? JSON.parse(storedUser) : null,
        token: storedToken ? storedToken : null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

// export action creators from slice's actions object
export const { setUser, setToken } = userSlice.actions;

// export reducer
export default userSlice.reducer;