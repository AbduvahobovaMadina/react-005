// import axios from "axios";
import axios from "../../api";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import "../../components/product/product.css";
import { IoStarOutline } from "react-icons/io5";
import savat from "../../assets/Group 95.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import "./Detail.scss";
import img1 from "../../assets/Group 188.png";
import img2 from "../../assets/Frame 3.png";
import React, { useEffect, useState, memo } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [products, setProducts] = useState(null);
  const [offset, setoffset] = useState(0);
  const [offsett, setoffsett] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  useEffect(() => {
    axios
      .get(`/products/category/${data?.category}`, { params: { limit: 4 } })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [id, data]);
  const images = data?.images?.map((el, inx) => (
    <div
      key={el}
      className="border cursor-pointer transition-all hover:scale-105 mt-6 "
    >
      <img key={inx} className="w-32 h-32 object-contain" src={el} alt="" />
    </div>
  ));
  console.log(data?.category);

  return (
    <div className="container">
      <div className="katolog__nav  flex items-center justify-between">
        <CiMenuFries />
        <form className="flex border items-center justify-center w-2/6 shadow-sm p-1 rounded-full">
          <input
            className="w-full"
            placeholder="Что желаете найти?"
            type="text"
          />
          <CiSearch />
        </form>
        <p className="text-base text-orange-400">Вставить список покупок</p>
        <div className="icons flex items-center justify-center gap-7">
          <IoStarOutline />
          <AiOutlineShoppingCart />
          <VscAccount />
        </div>
      </div>
      <div className="detail_wrap  mt-10">
        <p className="text-gray-500">Товары/Ванная/Платяные шкафы</p>
        <hr />
        <div className="flex gap-11 mt-6 md:flex-row flex-col">
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center ">
            <img src={data?.images && data?.images[0]} alt="" />
            <div className="flex items-center  justify-center">{images}</div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <b className="text-2xl">{data?.title}</b>
            <div className="flex items-center">
              <b className="text-xl">Арт. 890.321.44 / </b>
              <p className="text-gray-400">Под заказ на 4.04.2021</p>
            </div>
            <p className="text-gray-400">
              Банка с крышкой и поднос, 5 шт., стекло пробка банки и коробки
              помогут организовать удобное хранение.{" "}
            </p>
            <div className="flex items-center gap-14">
              <b>{data?.price} USD</b>
              <div className="flex items-center gap-8">
                <button
                  className="border w-7 rounded-md justify-center pl-2 pr-2 items-center flex"
                  disabled={offset <= 0}
                  onClick={() => setoffset(offset - 1)}
                >
                  -
                </button>
                <b>{offset}</b>
                <button
                  className="border rounded-md justify-center pl-2 pr-2 items-center flex w-7"
                  onClick={() => setoffset(offset + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center gap-7">



 
            <button className="bg-orange-500 p-2 rounded-lg text-white pl-4 pr-4">
                Добаить в корзину +
              </button>
              <div className="flex items-center gap-2">
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
            <p className="text-gray-400">{data?.description}</p>
            <div className="flex flex-col gap-3">
              <hr />
              <b>{data?.warrantyInformation}</b>
              <hr />
              <b>{data?.brand}</b>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="cards w-full  mt-9 justify-center items-center">
        <b>С этим товаром также заказывают</b>
        <ProductCard products={products?.products} />
      </div>
    </div>
  );
};

export default memo (Detail);
