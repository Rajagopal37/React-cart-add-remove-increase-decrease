import React, { useState } from "react";
import Data from "../../Data.json";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState(Data.products);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-4">
        {products.map((p) => (
          <Product product={p} key={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
