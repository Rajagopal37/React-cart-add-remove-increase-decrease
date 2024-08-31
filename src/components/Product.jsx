import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Check if the product is in the cart
    const productInCart = cart.find((item) => item.id === product.id);
    setIsAdded(!!productInCart); // Set isAdded to true if the product is in the cart, false otherwise
  }, [cart, product.id]);

  const addToCart = () => {
    dispatch({ type: "Add", product: product });
    setIsAdded(true);
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <div className="card bg-light">
            <div className="image text-center">
              <img
                src={product.image}
                className="card-img-top mt-2"
                style={{ width: "200px", height: "200px" }}
                alt={product.title}
              />
            </div>

            <div className="card-body bg-light">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <li className="list-group-item">
                Price: <span className="fw-bolder">₹ {product.price}</span>
              </li>
            </div>

            <div className="card-body d-flex">
              <button
                className="btn btn-primary mx-2"
                onClick={addToCart}
                disabled={isAdded}
              >
                {isAdded ? "Added" : "Add to Cart"}
              </button>
              <button className="btn btn-success mx-2">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
