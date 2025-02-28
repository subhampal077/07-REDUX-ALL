import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {
  getAllCartItems,
  getCartError,
  getCartItems,
  getCartLoading,
} from "../../store/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getAllCartItems);
  // console.log(cartItems);
  const loadingState = useSelector(getCartLoading);
  const fetchError = useSelector(getCartError);

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {loadingState ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : fetchError ? (
          <h2 style={{ textAlign: "center" }}>{fetchError}</h2>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              productId={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.image}
              rating={item.rating.rate}
            />
          ))
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {!loadingState && (
            <div className="total">
              $
              {cartItems.reduce((acc, el) => {
                return acc + el.price * el.quantity;
              }, 0)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
