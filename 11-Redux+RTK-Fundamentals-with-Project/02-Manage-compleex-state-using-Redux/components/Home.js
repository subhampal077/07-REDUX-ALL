import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

function Home() {
  const newProductsList = useSelector((state) => state.products);
  // console.log(newProductsList);

  return (
    <div className="products-container">
      {newProductsList.map((product) => {
        return (
          <Product
            key={product.id}
            productId={product.id}
            title={product.title}
            rating={product.rating.count}
            price={product.price}
            imageUrl={product.image}
          />
        );
      })}
    </div>
  );
}

export default Home;
