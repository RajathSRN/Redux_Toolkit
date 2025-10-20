import contactsInitialState from "../data/contacts";
import { login, logout } from "../slices/users";
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
  //users/login this action also executes when users action executes
  builder.addCase(login, (state, action) => {
    console.log("login slice called in contacts reducer");
    return contactsInitialState;
  });

  //users/logout
  builder.addCase(logout, (state, action) => {
    return [];
  });
}
export default contactsReducer;
