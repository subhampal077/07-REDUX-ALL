import { produce } from "immer";

// Action type
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// Action creator
export function addWishlistItem(productData) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: { ...productData },
  };
}

export function removeWishlistItem(productId) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId: productId },
  };
}

// Reducer
export default function wishListReducer(originalState = [], action) {
  
  return produce(originalState, (state) => {

    const existingItemIndex = state.findIndex(
      (item) => item.productId === action.payload.productId
    );

    switch (action.type) {
      case WISHLIST_ADD_ITEM:
        const existingItem = state.find((item) => {
          return item.productId === action.payload.productId;
        });
        // console.log(existingItem);

        if (existingItem) {
          return state.map((item) => {
            if (item.productId === action.payload.productId) {
              return { ...item };
            }
            return item;
          });
        }
        return [...state, action.payload];

      case WISHLIST_REMOVE_ITEM:
        state.splice(existingItemIndex, 1);
        return state;

      default:
        return state;
    }
  });
}
