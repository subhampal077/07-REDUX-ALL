import React from "react";
import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";

export default function Wishlist() {
  const wishListItems = useSelector((state) => state.wishList);
  //   console.log(wishListItems);

  return (
    <div className="cart-container">
      <h2>Items in Your Wishlist</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="quantity"></div>
          <div className="total"></div>
          <div className="item-price">Price</div>
        </div>
        {wishListItems.map(({ productId, title, rating, price, imageUrl }) => (
          <WishlistItem
            key={productId}
            productId={productId}
            title={title}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
      </div>
    </div>
  );
}
