// DUCKS PATTERN: When we put action types, action creators and reducer in a same file, that pattern called Ducks Pattern.

import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

// create async thunk
export const fetchCartItemsData = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/5");
      return response.json();
    } catch (err) {
      throw err;
    }
  }
);
// console.dir(fetchCartItemsData);

// create slice
const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    // fetchCartItems(state) {
    //   state.loading = true;
    // },
    // fetchCartError(state, action) {
    //   state.loading = false;
    //   state.error = action.payload || "Something went wrong";
    // },
    // loadCartItems(state, action) {
    //   state.loading = false;
    //   state.list = action.payload.products;
    //   state.error = "";
    // },
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list.splice(existingItemIndex, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity -= 1;
      if (state.list[existingItemIndex].quantity === 0) {
        state.list.splice(existingItemIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItemsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItemsData.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.products;
        state.error = "";
      })
      .addCase(fetchCartItemsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});
// console.log(slice);

export const getCartItems = ({ product, cartItems }) => {
  return cartItems.list
    .map((cartItem) => {
      const cartProduct = product.list.find(
        (productItem) => productItem.id === cartItem.productId
      );
      return { ...cartProduct, quantity: cartItem.quantity };
    })
    .filter((item) => item.title);
};

// for memoization
export const getAllCartItems = createSelector(
  [getCartItems],
  (cartItems) => cartItems
);

export const getCartLoading = (state) => state.cartItems.loading;
export const getCartError = (state) => state.cartItems.error;

// action creators
// const { loadCartItems, fetchCartItems, fetchCartError } = slice.actions;

// thunk action creator
// export const fetchCartItemsData = () => (dispatch, getState) => {
//   dispatch(fetchCartItems());
//   fetch("https://fakestoreapi.com/carts/5")
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch(loadCartItems(data));
//     })
//     .catch((err) => {
//       dispatch(fetchCartError(err.message));
//     });
// };

// action creators
export const {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} = slice.actions;

export default slice.reducer;
