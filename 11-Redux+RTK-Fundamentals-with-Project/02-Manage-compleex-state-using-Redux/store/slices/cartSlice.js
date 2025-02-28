// THis is called Ducks pattern. when we put action type, action creators and reducer at the same file that is called Ducks Pattern.

import { createSlice } from "@reduxjs/toolkit";
// import { produce } from "immer";

// Action types
// const CART_ADD_ITEM = "cart/addItem";
// const CART_REMOVE_ITEM = "cart/removeItem";
// const CART_ITEM_INCREASE_QUANTITY = "cart/IncreaseItemQuantity";
// const CART_ITEM_DECREASE_QUANTITY = "cart/DecreaseItemQuantity";

// // Action creators
// export function decreaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_DECREASE_QUANTITY,
//     payload: { productId: productId },
//   };
// }

// export function increaseCartItemQuantity(productId) {
//   return {
//     type: CART_ITEM_INCREASE_QUANTITY,
//     payload: { productId: productId },
//   };
// }

// export function removeCartItem(productId) {
//   return {
//     type: CART_REMOVE_ITEM,
//     payload: { productId: productId },
//   };
// }

// export function addCartItem(productData, quantity = 1) {
//   return {
//     type: CART_ADD_ITEM,
//     payload: { ...productData, quantity: quantity },
//   };
// }

// Reducer
// export default function cartReducer(originalState = [], action) {

//   return produce(originalState, (state) => {

//     const existingItemIndex = state.findIndex(
//       (item) => item.productId === action.payload.productId
//     );

//     switch (action.type) {
//       case CART_ADD_ITEM:
//         if (existingItemIndex !== -1) {
//           state[existingItemIndex].quantity += 1;
//           return state;
//         }
//         state.push({ ...action.payload, quantity: 1 });
//         return state;

//       case CART_REMOVE_ITEM:
//         // state.splice(existingItemIndex,1);
//         return state.filter(
//           (item) => item.productId !== action.payload.productId
//         );

//       case CART_ITEM_INCREASE_QUANTITY:
//         state[existingItemIndex].quantity += 1;
//         return state;

//       case CART_ITEM_DECREASE_QUANTITY:
//         state[existingItemIndex].quantity -= 1;
//         if (state[existingItemIndex].quantity < 1) {
//           state.splice(existingItemIndex, 1);
//           return state;
//         }
//       // return state
//       //   .map((item) => {
//       //     if (item.productId === action.payload.productId) {
//       //       return { ...item, quantity: item.quantity - 1 };
//       //     }
//       //     return item;
//       //   })
//       //   .filter((item) => item.quantity > 0);

//       default:
//         return state;
//     }
//   });
// }

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

// here createSlice creating action type, action creator and reducer
const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity === 0) {
        state.splice(existingItemIndex, 1);
      }
    },
  },
});

console.log(slice.actions);

export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions;

export default slice.reducer;
