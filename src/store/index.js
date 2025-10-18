import contactsSlice from "../slices/contacts";
import { configureStore } from "@reduxjs/toolkit";

let allReducers = {
    contacts: contactsSlice.reducer
};
const store = configureStore({
    reducer: allReducers,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()] //calls redux thunk by default
});

export default store;