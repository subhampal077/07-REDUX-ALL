import { combineReducers, createStore } from "redux";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";

// import { produce } from "immer";

// const initialState = {
//   products: productsList,
//   cartItems: [],
//   wishList: [],
// };

// const reducer = combineReducers({
//   products: productsReducer,
//   cartItems: cartReducer,
//   wishList: wishListReducer,
// });

// const CART_ADD_ITEM = "cart/addItem";
// const CART_REMOVE_ITEM = "cart/removeItem";
// const CART_ITEM_INCREASE_QUANTITY = "cart/IncreaseItemQuantity";
// const CART_ITEM_DECREASE_QUANTITY = "cart/DecreaseItemQuantity";

// const WISHLIST_ADD_ITEM = "wishList/addItem";
// const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// function reducer(state = initialState, action) {
//   //   console.log(action);

//   switch (action.type) {
//     case CART_ADD_ITEM:
//       return { ...state, cartItems: [...state.cartItems, action.payload] };

//     case CART_REMOVE_ITEM:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (item) => item.productId !== action.payload.productId
//         ),
//       };

//     case CART_ITEM_INCREASE_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) => {
//           if (item.productId === action.payload.productId) {
//             return { ...item, quantity: item.quantity + 1 };
//           }
//           return item;
//         }),
//       };

//     case CART_ITEM_DECREASE_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems
//           .map((item) => {
//             if (item.productId === action.payload.productId) {
//               return { ...item, quantity: item.quantity - 1 };
//             }
//             return item;
//           })
//           .filter((item) => item.quantity > 0),
//       };
//     case WISHLIST_ADD_ITEM:
//       return {
//         ...state,
//         wishList: [...state.wishList, action.payload],
//       };
//     case WISHLIST_REMOVE_ITEM:
//       return {
//         ...state,
//         wishList: state.wishList.filter(
//           (item) => item.productId !== action.payload.productId
//         ),
//       };
//     default:
//       return state;
//   }
// }

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
});

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__?.()
// );

const unsubscribe = store.subscribe(() => {
  // console.log(store.getState());
});

// store.dispatch(addCartItem(1, 1));
// store.dispatch(addCartItem(12, 1));
// store.dispatch(addCartItem(6, 1));
// store.dispatch(addCartItem(18, 1));

// store.dispatch(removeCartItem(6));

// store.dispatch(increaseCartItemQuantity(18));
// store.dispatch(increaseCartItemQuantity(18));

// store.dispatch(decreaseCartItemQuantity(18));
// store.dispatch(decreaseCartItemQuantity(12));

// store.dispatch(addWishlistItem(2));
// store.dispatch(addWishlistItem(4));
// store.dispatch(removeWishlistItem(4));

// ============================================//

const users = [
  {
    name: "Subh",
    age: 25,
  },
  {
    name: "Ram",
    age: 20,
  },
  {
    name: "Suman",
    age: 30,
  },
];

// non function way to modify user
// users[1].age = 18;
// console.log(users);

// functional way to modify
// const newUsers = users.map((user, index) => {
//   if (index === 1) {
//     return { ...user, age: 18 };
//   }
//   return user;
// });
// console.log(newUsers);

// modify array using immer ( mutating code works like non mutating. Original Array does not modify)
// const newUsers = produce(users, (usersCopy) => {
//   usersCopy[1].age = 18;
// });

// console.log(newUsers);
// console.log(users);
