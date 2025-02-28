import { createStore } from "redux";
import { productList } from "./productList";

const initialState = {
  products: productList,
  cartItems: [],
  wishList: [],
};

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseQuantity";

const WISHLIST_ADD_ITEM = "wishlist/addItem";
const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    case CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case CART_ITEM_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.productId === action.payload.productId) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity > 0),
      };
    case WISHLIST_ADD_ITEM:
      return { ...state, wishList: [...state.wishList, action.payload] };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    default:
      return state;
  }
}

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

console.dir(store);

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 1, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 4, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 10, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 12, quantity: 1 },
});

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 12, quantity: 1 },
});

store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { productId: 4 },
});

store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 4 },
});

store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 4 },
});

// wishlist

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 4 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 16 },
});

store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 16 },
});
