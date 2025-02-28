// DUCKS PATTERN: When we put action types, action creators and reducer in a same file, that pattern called Ducks Pattern.

import { produce } from "immer";

// Action types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseQuantity";

// Action creators

export function addCartItem(productData) {
  return {
    type: CART_ADD_ITEM,
    payload: { ...productData, quantity: 1 },
  };
}

export function removeCartItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId: productId, quantity: 1 },
  };
}

export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId: productId },
  };
}

export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId: productId },
  };
}

// Reducer
function cartReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex(
      (item) => item.productId === action.payload.productId
    );

    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1;
          break;
        }
        state.push(action.payload);
        break;
      case CART_REMOVE_ITEM:
        state.splice(existingItemIndex, 1);
        break;
      case CART_ITEM_INCREASE_QUANTITY:
        state[existingItemIndex].quantity += 1;
        break;
      case CART_ITEM_DECREASE_QUANTITY:
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0) {
          state.splice(existingItemIndex, 1);
        }
        break;
    }
    return state;
  });
}

export default cartReducer;
