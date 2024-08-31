import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProducts = ({ products }) => {
  const { dispatch } = useContext(CartContext);

  const Increase = (id) => {
    dispatch({ type: "Increase", id });
  };

  const Decrease = (id) => {
    dispatch({ type: "Decrease", id });
  };

  const Remove = (id) => {
    dispatch({ type: "Remove", id });
  };

  return (
    <div className="d-flex border my-4">
      <img
        src={products.image}
        className=""
        style={{ height: "8rem", width: "8rem" }}
        alt={products.title}
      />
      <div className="details">
        <h4 className="mt-3">{products.title}</h4>
        <h5 className="mt-3">₹ {products.price}</h5>
      </div>
      <div className="buttons mt-4">
        <button
          className="rounded-circle px-2"
          onClick={() => Decrease(products.id)}
        >
          <b>-</b>
        </button>
        <span className="mx-2">{products.quantity}</span>
        <button
          className="rounded-circle px-2"
          onClick={() => Increase(products.id)}
        >
          <b>+</b>
        </button>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => Remove(products.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
