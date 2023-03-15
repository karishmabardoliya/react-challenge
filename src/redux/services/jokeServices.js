import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
 
export const getJoke = createAsyncThunk('joke/getJoke', async (page, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://icanhazdadjoke.com/`,{
        headers: { "Content-Type": "application/json",
        "accept": "application/json"
  }});
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})