import { createSlice } from "@reduxjs/toolkit";
import contactsInitialState from "../data/contacts";
import contactsReducer from "../reducers/contacts";

const contactsSlice = createSlice({
    name: "contacts-list",
    initialState: contactsInitialState,
    reducers: contactsReducer
});

export default contactsSlice;