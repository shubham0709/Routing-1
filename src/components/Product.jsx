import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  return (
    <div>
      <h2>Product id : {id}</h2>
      <h2>name : {product.name}</h2>
    </div>
  );
};

export default Product;
