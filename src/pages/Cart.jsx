import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProducts from "../components/CartProducts";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProducts key={p.id} products={p} />
          ))}
        </div>
        <div className="col-4 my-4">
          <div className="bg-secondary p-5 text-white">
            <h5>Total Items: {totalItems}</h5>
            <h5>Total Price: ₹ {totalPrice.toFixed(2)}</h5>
            <div className="btn btn-warning">Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
