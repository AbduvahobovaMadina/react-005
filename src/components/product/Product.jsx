import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useEffect, useState } from "react";
import savat from "../../assets/Group 95.png";
import "./product.css"
const API_URL = "https://dummyjson.com";

const Product = () => {
  const [products, setproduct] = useState(null);
  const [offset, setoffset] = useState(0);
  const handleClick = () => setoffset(offset + 1);
  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((res) => setproduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  console.log(products);
  const productItem = products?.map((product) => (
    <div
      key={product.id}
      className="productCard pb-5 w-72  flex flex-col items-start justify-center p-3"
    >
      <div
        className="image__product w-56
      h-56 flex flex-col items-center m-auto "
      >
        <img className="object-contain h-56" src={product.images[0]} alt="" />
      </div>
      <p className="text-red-600 font-extrabold">12%</p>
      <b className="text">{product.title}</b>
      <b className="text-2xl">{product.price}$</b>
      <del className="text-start">7 763,23 Br</del>
      <div className="div__num mt-5 flex items-center justify-center gap-2">
        <button
          className=" w-3 h-3"
          disabled={offset <= 1}
          onClick={() => setoffset(offset - 1)}
        >
          -
        </button>
        <p className="w-3 h-3">{offset}</p>
        <button className="w-3 h-3 " onClick={handleClick}>
          +
        </button>
        <div className="product__savat">
        <img src={savat} alt="" />
      </div>
      </div>
      
    </div>
  ));

  return (

    <div className="container flex items-center justify-between gap-5 flex-wrap">

      {productItem}
    </div>
  );
};

export default Product;