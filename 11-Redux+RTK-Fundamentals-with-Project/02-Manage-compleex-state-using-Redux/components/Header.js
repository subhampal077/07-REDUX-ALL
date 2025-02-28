import React from "react";
import CartIcon from "./cart-icon.svg";
import WishlistIcon from "./wishlist.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishList);
  // console.log(wishList);

  return (
    <>
      <header>
        <div className="header-contents">
          <h1>
            <Link to="/">EShop</Link>
          </h1>

          <div className="wishlist-cart-container">
            <Link to="/Wishlist" className="cart-icon">
              <img src={WishlistIcon} alt="wishlist-icon" />
              <div className="cart-items-count">{wishList.length}</div>
            </Link>

            <Link to="/Cart" className="cart-icon">
              <img src={CartIcon} alt="cart-icon" />
              <div className="cart-items-count">
                {cartItems.reduce((acc, item) => {
                  return acc + item.quantity;
                }, 0)}
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
