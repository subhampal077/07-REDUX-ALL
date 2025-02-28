import React from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";

const Home = () => {
  const productList = useSelector((state) => state.product);
  // console.log(productList);
  return (
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
