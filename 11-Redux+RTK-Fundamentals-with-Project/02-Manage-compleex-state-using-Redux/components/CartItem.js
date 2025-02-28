import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "../store/slices/cartSlice";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() => {
            dispatch(removeCartItem({ productId }));
          }}
        >
          Remove
        </button>
        <button
          onClick={() => dispatch(decreaseCartItemQuantity({ productId }))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => dispatch(increaseCartItemQuantity({ productId }))}
        >
          +
        </button>
      </div>
      <div className="item-total">
        ${parseFloat(quantity * price).toFixed(2)}
      </div>
    </div>
  );
}
