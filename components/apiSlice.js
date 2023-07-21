import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: [],
  reducers: {
    addToFavourite: (state, action) => {
      state.push(action.payload);
    },
    deleteFromFavourite: (state, action) => {
      return state.filter((elem) => elem.id !== action.payload.id);
    },
  },
});

export const { addToFavourite, deleteFromFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
