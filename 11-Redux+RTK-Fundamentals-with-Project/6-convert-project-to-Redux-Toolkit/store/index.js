// import { combineReducers, createStore } from "redux";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import productReducer from "./slices/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";

const store = configureStore({
  reducer: {
    product: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  // by default thunk middleware is installed with Redux Toolkit (rtk), so don't need to use my func middleware
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

// console.dir(store);

export default store;
