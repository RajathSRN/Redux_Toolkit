import { fetchContactsThunk, addContactThunk, updateContactThunk, deleteContactThunk } from "../thunks/contacts";

let contactsReducer = {
  //case reducer: contacts-list add
  add: (state, action) => {
    state.push(action.payload);
  },

  //case reducer: contacts-list remove
  remove: (state, action) => {
    let index = state.findIndex((contact) => contact.id === action.payload.id);
    state.splice(index, 1);
  },

  //case reducer: contacts-list update
  update: (state, action) => {
    let index = state.findIndex((contact) => contact.id === action.payload.id);
    state[index] = action.payload;
  },
};

export let contactsExtraReducer = (builder) => {
  builder
    .addCase(fetchContactsThunk.pending, (state, action) => {
      state.data = [];
      state.status = action.meta.requestStatus;
      state.error = {};
    })
    .addCase(fetchContactsThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = action.meta.requestStatus;
      state.error = {};
    })
    .addCase(fetchContactsThunk.rejected, (state, action) => {
      state.data = [];
      state.status = action.meta.requestStatus;
      state.error = action.error;
    })
    .addCase(addContactThunk.pending, (state, action) => {
      state.status = action.meta.requestStatus;
      state.error = {};
    })
    .addCase(addContactThunk.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = action.meta.requestStatus;
      state.error = {};
    })
    .addCase(addContactThunk.rejected, (state, action) => {
      state.status = action.meta.requestStatus;
      state.error = action.error;
    })
    .addCase(deleteContactThunk.pending, (state, action) => {
      state.status = action.meta.requestStatus;
      state.error = {};
    })
    .addCase(deleteContactThunk.fulfilled, (state, action) => {
      const id = action.payload?.id ?? action.payload;
      state.data = state.data.filter(contact => contact.id !== id);
      state.status = action.meta.requestStatus;
      state.error = {};
    })
    .addCase(deleteContactThunk.rejected, (state, action) => {
      state.status = action.meta.requestStatus;
      state.error = action.error;
    })
    .addCase(updateContactThunk.pending, (state, action) => {
      state.status = action.meta.requestStatus;
      state.error = {};
    })
    .addCase(updateContactThunk.fulfilled, (state, action) => {
      let index = state.data.findIndex(contact => contact.id === action.payload.id);
      state.data[index] = action.payload;
      state.status = action.meta.requestStatus;
      state.error = {};
    })
    .addCase(updateContactThunk.rejected, (state, action) => {
      state.status = action.meta.requestStatus;
      state.error = action.error;
    });
};

export default contactsReducer;
