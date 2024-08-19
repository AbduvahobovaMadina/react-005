import React, { useState, useEffect } from "react";
// import axios from "axios";
import axios from "../../api";
import savat from "../../assets/Group 95.png";
import "./product.css"
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

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
      .get(`/products/category-list`)
      .then((res) => setcategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(categories);
  useEffect(() => {
    setloding(true);
    axios
      .get(`/products${sellect}`, {
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
      <ProductCard products={products}/>
        {loading && load}
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