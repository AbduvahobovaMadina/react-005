import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import "./Call.scss";
import img1 from "../../assets/shutterstock_1851191410 1.png";
import img2 from "../../assets/Group 43.png";
import img3 from "../../assets/Group 42.png";
import img4 from "../../assets/Group 44.png";

const Call = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
      <div className="call__wrap">
        <b>Контакты</b>
        <div className="call__category w-full flex items-center">
          <div>
            <div className="grid grid-cols-3 gap-6 contact ">
              <div className="category__items">
                <p>+ 375 434 847 28 84</p>
                <p>+ 375 434 847 28 84</p>
                <p>ikeaekspress@gmail.com</p>
              </div>
              <div className="category__items">
                <p>г.Минск </p>
                <p>Ул. Первомайская</p>
                <p>Д. 1, Кв. 43</p>
              </div>
              <div className="category__items">
                <p>ОГРН: 3748 49384 4847 30948 </p>
                <p>ООО “Икеа”</p>
                <p>Политика конфиденциальности</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <img className="image" src={img2} alt="" />
              <img className="image" src={img3} alt="" />
              <img className="image" src={img4} alt="" />
            </div>
          </div>
          <div className="category__itemss">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;