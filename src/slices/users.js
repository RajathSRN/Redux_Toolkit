import { createSlice } from "@reduxjs/toolkit";
import userInitialState from "../data/users";
import userReducer from "../reducers/users";

let usersSlice = createSlice({
    name: "users",
    initialState: userInitialState,
    reducers: userReducer
});

export const { login, logout } = usersSlice.actions;
export default usersSlice;