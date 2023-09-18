import { addContact, deleteContact, fetchContacts } from './operations';
import { handleFulfilledAdd, handleFulfilledDel, handleFulfilledGet, handlePending, handleRejected } from './servise/handleStatus';


const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

// -------------------------Import-------------------

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};
const contactsSlice = createSlice({
    name: 'contactsBook',
    initialState,
    reducers: {
      filterContacts: (state, action) => {
        return {
          ...state,
          filter: action.payload,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.fulfilled, handleFulfilledGet)
        .addCase(addContact.fulfilled, handleFulfilledAdd)
        .addCase(deleteContact.fulfilled, handleFulfilledDel)
        .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), handlePending)
        .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), handleRejected);
    },
  });
  export const { filterContacts } =
    contactsSlice.actions;
  export default contactsSlice.reducer;