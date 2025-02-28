import { combineReducers, createStore } from "redux";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import productReducer from "./slices/productSlice";

const reducer = combineReducers({
  product: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

// console.dir(store);

export default store;
