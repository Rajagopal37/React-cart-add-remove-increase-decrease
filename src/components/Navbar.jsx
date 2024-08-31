import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="d-flex py-3 px-5 justify-content-between bg-secondary sticky-top ">
        <Link to="/" className="text-white fs-4 fw-bolder text-decoration-none">
          {" "}
          RAJENT SPL - MALL{" "}
        </Link>

        <Link to="/cart" className="text-white fs-5 text-decoration-none">
          {" "}
          <BsCart /> {cart.length}
        </Link>
      </div>
    </>
  );
};

export default Navbar;
