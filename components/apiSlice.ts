import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../store";


const initialState: IItem[] = [];

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action:PayloadAction<IItem>) => {
      state.push(action.payload);
    },
    deleteFromFavourite: (state, action:PayloadAction<number>) => {
      return state.filter((elem) => elem.id !== action.payload);
    },
  },
});

export const { addToFavourite, deleteFromFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
