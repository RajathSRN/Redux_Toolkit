import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let api = axios.create({
    baseURL: "http://localhost:5000"
});

export const fetchContactsThunk = createAsyncThunk(
    //contacts/fetch/pending, contacts/fetch/fulfilled, contacts/fetch/rejected
    //no need of manual dispatch 
    "contacts/fetch", async () => {
        let response = await api.get("/contacts");
        return response.data; //payload of fulfilled action
    }
);

export const addContactThunk = createAsyncThunk(
    "contacts/add", async (contact, { rejectWithValue }) => {
        try {
            let response = await api.post("/contacts", contact);
            return response.data; //payload of fulfilled action
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateContactThunk = createAsyncThunk(
    "contacts/update", async (contact, { rejectWithValue }) => {
        try {
            let response = await api.put(`/contacts/${contact.id}`, contact);
            return response.data; //payload of fulfilled action
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    "contacts/delete", async (contact, { rejectWithValue }) => {
        try {
            await api.delete(`/contacts/${contact.id}`);
            return contact; //payload of fulfilled action
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);