import React from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";
import {
  getAllProducts,
  getProductError,
  getProductLoading,
} from "../../store/slices/productSlice";

const Home = () => {
  const productList = useSelector(getAllProducts);
  const loadingState = useSelector(getProductLoading);
  const fetchError = useSelector(getProductError);
  // console.log(productList);

  return loadingState ? (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  ) : fetchError ? (
    <h2 style={{ textAlign: "center" }}>{fetchError}</h2>
  ) : (
    <div className="home">
      <div className="products-container">
        {productList.map((product) => (
          <Product
            key={product.id}
            productId={product.id}
            imageUrl={product.image}
            title={product.title}
            rating={product.rating.rate}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
