import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../store/slices/productSlice";
import { fetchCartItemsData } from "../../store/slices/cartSlice";

export default function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItemsData());
    dispatch(fetchProductsData());

    // Data fetch using custom API middleware //
    // dispatch({
    //   type: "api/makeCall",
    //   payload: {
    //     url: "products",
    //     onStart: fetchProducts.type,
    //     onSuccess: updateAllProduct.type,
    //     onError: fetchProductsError.type,
    //   },
    // });

    // Normal Data fetch from API (without middleware like react) //
    // dispatch(fetchCartItems());
    // fetch("https://fakestoreapi.com/carts/5")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     dispatch(loadCartItems(data))})
    //   .catch((err) => dispatch(fetchCartError(err.message)));
  }, []);

  const cartItems = useSelector((state) => state.cartItems.list);
  // console.log(cartItems);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shoppy</Link>
        </h1>

        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce((acc, el) => {
              return (acc += el.quantity);
            }, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
}
