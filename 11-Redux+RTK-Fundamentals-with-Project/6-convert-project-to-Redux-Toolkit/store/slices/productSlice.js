import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return response.json();
    } catch (err) {
      throw err;
    }
  }
);

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  // reducers: {
  //   fetchProducts(state) {
  //     state.loading = true;
  //   },
  //   fetchProductsError(state, action) {
  //     state.loading = false;
  //     state.error = action.payload || "Something went wrong!!";
  //   },
  //   updateAllProduct(state, action) {
  //     state.list = action.payload;
  //     state.loading = false;
  //     state.error = "";
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong!!";
      });
  },
});

export const getAllProducts = (state) => state.product.list;
export const getProductLoading = (state) => state.product.loading;
export const getProductError = (state) => state.product.error;

// thunk action creator
// export const fetchProductsData = () => (dispatch) => {
//   dispatch(fetchProducts());
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch(updateAllProduct(data));
//     })
//     .catch((err) => {
//       dispatch(fetchProductsError(err.message));
//     });
// };

// action creators
// const { updateAllProduct, fetchProducts, fetchProductsError } = slice.actions;

export default slice.reducer;
