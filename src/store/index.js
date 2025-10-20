import contactsSlice from "../slices/contacts";
import usersSlice from "../slices/users";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

let allReducers = {
    contacts: contactsSlice.reducer,
    users: usersSlice.reducer
};

var logger = createLogger({
    collapsed: true,
    duration: true
});

const store = configureStore({
    reducer: allReducers,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger] //calls redux thunk by default
});

export default store;