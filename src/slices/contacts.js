import { createSlice } from "@reduxjs/toolkit";
import contactsInitialState from "../data/contacts";
import contactsReducer, { contactsExtraReducer } from "../reducers/contacts";

const contactsSlice = createSlice({
    name: "contacts-list",
    initialState: contactsInitialState,
    reducers: contactsReducer,
    extraReducers: contactsExtraReducer
});

export const { add, remove, update } = contactsSlice.actions;
export default contactsSlice;