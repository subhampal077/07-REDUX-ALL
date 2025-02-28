// DUCKS PATTERN: When we put action types, action creators and reducer in a same file, that pattern called Ducks Pattern.

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
function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const existingItem = state.find(
        (item) => item.productId === action.payload.productId
      ); // it will return the matching item
      // console.log(existingItem);

      if (existingItem) {
        return state.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
      return [...state, action.payload];
    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case CART_ITEM_INCREASE_QUANTITY:
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case CART_ITEM_DECREASE_QUANTITY:
      return state
        .map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
}

export default cartReducer;
