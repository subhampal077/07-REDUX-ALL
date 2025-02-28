import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes -= 1;
    },
    restock: function (state, action) {
      state.numOfCakes += action.payload;
    },
  },
});

// console.log(cakeSlice);

// named export
export const cakeReducer = cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
