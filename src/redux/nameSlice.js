import { createSlice } from '@reduxjs/toolkit';

export const nameSlice = createSlice({
  name: 'name',
  initialState: {
    name: '',
  },
  reducers: {
    changeValue: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {changeValue}= nameSlice.actions
export const nameReducer = nameSlice.reducer