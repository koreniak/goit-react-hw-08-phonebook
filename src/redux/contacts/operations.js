import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const {data} = await axios.get('/contacts');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contacts);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const patchContact = createAsyncThunk(
  'contacts/patchContact',
  async ({ id, name, number }, { rejectWithValue }) => {

    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });

      return data;
    } catch (error) {
      return rejectWithValue(toast.error("Invalid login or password"));
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);