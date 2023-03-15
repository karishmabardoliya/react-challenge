import { createSlice } from "@reduxjs/toolkit";
import { getJoke } from "../services/jokeServices";
 
const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
}
 
export const jokeSlice = createSlice({
  name: 'joke',
  initialState,
  reducers: {
    addjoke : (state, { payload }) => {
      state.data.push(payload);
    }
  },
  extraReducers: {
    [getJoke.pending]: (state) => {
      state.isLoading = true;
    },
    [getJoke.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data.push(payload);
    },
    [getJoke.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload
    }
  }
})
export const { addjoke } = jokeSlice.actions;
export default jokeSlice.reducer;