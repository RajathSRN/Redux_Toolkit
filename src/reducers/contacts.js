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
    return state.map((contact) => {
      if (contact.id === action.payload.id) {
        return {
          ...contact,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          phone: action.payload.phone,
        };
      } else {
        return contact;
      }
    });
  },
};

export default contactsReducer;
