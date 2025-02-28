const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

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
module.exports.icecreamReducer = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
