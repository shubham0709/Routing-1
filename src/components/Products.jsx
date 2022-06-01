import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import style from "./Product.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/products`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className={style.flex}>
      <div>
        {products.map((x) => (
          <div key={x.id}>
            <Link to={`/products/${x.id}/`}>{x.name}</Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
