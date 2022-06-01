import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    id ? navigate(`/products/${id}`) : console.log("null");
  };
  return (
    <div>
      <h1>Navbar</h1>
      <div className={style.navbar}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <button
          onClick={() => {
            handleClick(1);
          }}
        >
          Go to product
        </button>
        <button
          onClick={() => {
            handleClick(2);
          }}
        >
          Go to product
        </button>
      </div>
    </div>
  );
};

export default Navbar;
