import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";
import productReducer from "./productReducer";

const reducer = combineReducers({
  product: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

// console.dir(store);

export default store;
