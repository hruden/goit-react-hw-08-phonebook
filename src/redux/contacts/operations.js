import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
    'tasks/fetchAll',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get('/contacts');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'tasks/addTask',
    async (body, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', body);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'tasks/deleteTask',
    async (contactsId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactsId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const updateContact = createAsyncThunk(
    'tasks/deleteTask',
    async (contactsId, thunkAPI) => {
      try {
        const response = await axios.patch(`/contacts/${contactsId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );