import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
  numOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initialState,
  reducers: {
    ordered: function (state, action) {
      state.numOfIcecream -= 1;
    },
    restock: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(cakeActions.ordered, (state, action) => {
      state.numOfIcecream -= 1;
    });
  },
});

// console.log(icecreamSlice);
export const icecreamReducer = icecreamSlice.reducer;
export const icecreamActions = icecreamSlice.actions;
