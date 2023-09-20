import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';
import {
  handleFulfilledAdd,
  handleFulfilledDel,
  handleFulfilledGet,
  handleFulfilledUpdate,
  handlePending,
  handleRejected,
} from './servise/handleStatus';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

// -------------------------Import-------------------

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
  electContact:{},
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
    electContactChange: (state, action) => {
      return{
        ...state,
        electContact: action.payload,}
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDel)
      .addCase(updateContact.fulfilled, handleFulfilledUpdate)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending,
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected,
        ),
        handleRejected
      );
  },
});
export const { filterContacts, electContactChange } = contactsSlice.actions;
export default contactsSlice.reducer;
