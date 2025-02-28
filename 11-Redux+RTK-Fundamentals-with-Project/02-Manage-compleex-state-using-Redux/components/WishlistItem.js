import React from "react";
import { useDispatch } from "react-redux";
import { removeWishlistItem } from "../store/slices/wishListSlice";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
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
      <div className="item-quantity">
        <span></span>
        <span></span>
        <button
          onClick={() => {
            dispatch(removeWishlistItem(productId));
          }}
        >
          Remove
        </button>
      </div>
      <div className="item-total"></div>
      <div className="item-price">${price}</div>
    </div>
  );
}
