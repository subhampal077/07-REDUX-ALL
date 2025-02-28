const { createSlice } = require("@reduxjs/toolkit");

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
module.exports.cakeReducer = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
