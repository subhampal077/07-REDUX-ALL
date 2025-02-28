import { combineReducers, createStore } from "redux";
import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "../cartReducer";
import wishListReducer, {
  addWishlistItem,
  removeWishlistItem,
} from "./wishListReducer";
import productReducer from "./productReducer";

// export const initialState = {
//   products: productList,
//   cartItems: [],
//   wishList: [],
// };

const reducer = combineReducers({
  product: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

console.dir(store);

// cart
store.dispatch(addCartItem(1));
store.dispatch(addCartItem(4));
store.dispatch(addCartItem(10));
store.dispatch(addCartItem(12));

store.dispatch(removeCartItem(12));

store.dispatch(increaseCartItemQuantity(4));
store.dispatch(decreaseCartItemQuantity(4));
store.dispatch(decreaseCartItemQuantity(4));

// wishlist
store.dispatch(addWishlistItem(4));
store.dispatch(addWishlistItem(16));
store.dispatch(removeWishlistItem(16));
