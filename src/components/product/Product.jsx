import React, { useState, useEffect } from "react";
import axios from "axios";
import savat from "../../assets/Group 95.png";
import "./product.css"
import { Link } from "react-router-dom";
const API_URL = "https://dummyjson.com";

const Product = () => {
  const [products, setproduct] = useState(null);
  const [offset, setoffset] = useState(0);
  const [categories, setcategories] = useState(null);
  const [offsetsy, setoffsetsy] = useState(1);
  const [loading, setloding] = useState(false);
  const [total, settottal] = useState(0);
  const [sellect, setSellect] = useState("");
  const handleClick = () => setoffset(offset + 1);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/category-list`)
      .then((res) => setcategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(categories);
  useEffect(() => {
    setloding(true);
    axios
      .get(`${API_URL}/products${sellect}`, {
        params: {
          limit: 6 * offsetsy,
        },
      })
      .then((res) => {
        settottal(res.data.total),
          setproduct(
            res.data.products.map((produc) => ({ ...produc, count: 0 }))
          );
      })
      .catch((err) => console.log(err))
      .finally(() => setloding(false));
  }, [offsetsy, sellect]);
  console.log(products);
  const addToCartHandler = (id, positive = true) => {
    setproduct((prev) => {
      const newArr = prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: positive ? item.count + 1 : item.count - 1 };
        } else {
          return item;
        }
      });
      return newArr;
    });
  };
  const productItem = products?.map((product) => (
    <div
      key={product.id}
      className="productCard pb-5 flex flex-col items-start justify-center p-3"
    >
      <div
        className="image__product w-56
      h-56 flex flex-col items-center m-auto "
      >
        <Link to={`/product/${product.id}`}>
          <img className="object-contain h-56" src={product.images[0]} alt="" />
        </Link>
      </div>
      <p className="text-red-600 font-extrabold">12%</p>
      <b className="text">{product.title}</b>
      <b className="text-2xl">{product.price}$</b>
      <del className="text-start pb-6">7 763,23 Br</del>
      <div className="div__num mt-5 flex items-center justify-center gap-2">
      <button
          className=" w-4 h-4 p-2 pb-3 rounded-md border flex items-center justify-center"
          disabled={product.count <= 0}
          onClick={() => addToCartHandler(product.id, false)}
        >
          -
        </button>
        <p className=" w-3 h-3  flex items-center justify-center">
          {product.count}
        </p>
        <button
          className=" w-4 h-4 border p-2 pb-3 rounded-md flex items-center justify-center"
          onClick={() => addToCartHandler(product.id)}
        >
          +
        </button>
      </div>
      <div className="product__savat">
        <img src={savat} alt="" />
      </div>
    </div>
  ));

  const categoryItem = categories?.map((category) => (
    <strong
      onClick={(e) => setSellect(`/category/${e.target.textContent}`)}
      key={category}
      href=""
    >
      {" "}
      <p
        className="whitespace-nowrap font-sans hover:transition-all ease-in hover:bg-orange-400 hover:text-white  border shadow-md p-2 cursor-pointer rounded-md"
      >
        {category}
      </p>
    </strong>
  ));
  const load = (
    <div className="spinner">
      <span className="loader"></span>
    </div>
  );
  return (
    <div className="container ">
      <div className="flex gap-2 overflow-x-auto py-6 scroll-hide">
        {categoryItem}
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  items-center justify-center gap-5 ">
        {loading && load}
        {productItem}
      </div>
      {6 * offsetsy <= total ? (
        <button
          className="border py-2 px-6 rounded-md block mx-auto mt-6 hover:text-white hover:bg-orange-500 transition-all"
          onClick={() => setoffsetsy((p) => p + 1)}
        >
          {" "}
          See More
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;