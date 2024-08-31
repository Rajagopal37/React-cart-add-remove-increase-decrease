import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="conitainer">
      <div className="row my-3">
        <div className="col">
          <div className="card bg-light">
            <div className="image text-center">
              <img
                src={product.image}
                className="card-img-top mt-2 "
                style={{ width: "200px", height: "200px" }}
              />
            </div>

            <div className="card-body bg-light gray">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <li className="list-group-item">
                Price :<span className="fw-bolder"> ₹ {product.price} </span>
              </li>
            </div>

            <div className="card-body d-flex">
              <button
                className="btn btn-primary mx-2"
                onClick={() => dispatch({ type: "Add", product: product })}
              >
                Add to cart
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
