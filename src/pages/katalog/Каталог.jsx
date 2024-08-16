import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import "./katalog.scss";
import { VscAccount } from "react-icons/vsc";
import rasm1 from "../../assets/Rectangle 66.png";
import rasm2 from "../../assets/Rectangle 67.png";
import rasm3 from "../../assets/Rectangle 68.png";
import rasm4 from "../../assets/Rectangle 69.png";
import rasm5 from "../../assets/Rectangle 185.png";
import rasm6 from "../../assets/Rectangle 186.png";
import rasm7 from "../../assets/Rectangle 187.png";
import rasm8 from "../../assets/Rectangle 188.png";

const Каталог = () => {
  return (
    <div className="container flex flex-col gap-4 kotolog">
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
      <div className="cards flex flex-col gap-7 ">
        <b className="text">Каталог</b>
        <div className="card_wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          <div className="card">
            <div>
              <img src={rasm1} alt="" />
            </div>
            <b>Мебель</b>
            <p>Шкафы и шкафы-купе</p>
            <p>Стеллажи и книжные шкафы</p>
            <p>Столы</p>
            <p>Стулья</p>
            <p className="flex items-center gap-2">
              Больше <FaArrowRightLong />{" "}
            </p>
          </div>
          <div className="card">
            <div>
              <img src={rasm2} alt="" />
            </div>
            <b>Аксессуары для создания уюта</b>
            <p>Постельное белье</p>
            <p>Стеллажи и книжные шкафы</p>
            <p>Комплекты постельного белья</p>
            <p>Пледы</p>
            <p className="flex items-center gap-2">
              Больше <FaArrowRightLong />{" "}
            </p>
          </div>
          <div className="card">
            <div>
              <img src={rasm3} alt="" />
            </div>
            <b>Хранение и порядок</b>
            <p>Аксессуары для хранения</p>
            <p>
              Крючки и полки на стену обувницы, полки с крючками для хранения
            </p>
            <p>Вешалки, обувницы, полки с крючками для хранения</p>
            <p>Системы для хранения</p>
            <p>Шкафы и шкафы-купе</p>

            <p className="flex items-center gap-2">
              Больше <FaArrowRightLong />{" "}
            </p>
          </div>
          <div className="card">
            <div>
              <img src={rasm4} alt="" />
            </div>
            <b>Аксессуары </b>
            <p>Шкафы и шкафы-купе</p>
            <p>Стеллажи и книжные шкафы</p>
            <p>Столы</p>
            <p>Стулья</p>
            <p className="flex items-center gap-2">
              Больше <FaArrowRightLong />{" "}
            </p>
          </div>
          <div className="card">
            <div>
              <img src={rasm5} alt="" />
            </div>
            <b>Мебель</b>
            <p>Шкафы и шкафы-купе</p>
            <p>Стеллажи и книжные шкафы</p>
            <p>Столы</p>
            <p>Стулья</p>
            <p>Стеллажи и книжные шкафы</p>
            <p className="flex items-center gap-2">
              Больше <FaArrowRightLong />{" "}
            </p>
          </div>
          <div className="card">
            <div>
              <img src={rasm6} alt="" />
            </div>
            <b>Аксессуары для создания уюта</b>
            <p>Постельное белье</p>
            <p>Одеяла</p>
            <p>Комплекты постельного белья</p>
            <p>Стулья</p>
            <p>Подушки</p>
            <p className="flex items-center gap-2">
              Больше <FaArrowRightLong />{" "}
            </p>
          </div>
          <div className="card">
            <div>
              <img src={rasm7} alt="" />
            </div>
            <b>Мебель</b>
            <p>Шкафы и шкафы-купе</p>
            <p>Стеллажи и книжные шкафы</p>
            <p>Столы</p>
            <p>Стулья</p>
            <p className="flex items-center gap-2">
              Больше <FaArrowRightLong />{" "}
            </p>
          </div>
          <div className="card">
            <div>
              <img src={rasm8} alt="" />
            </div>
            <b>Мебель</b>
            <p>Шкафы и шкафы-купе</p>
            <p>Стеллажи и книжные шкафы</p>
            <p>Столы</p>
            <p>Стулья</p>
            <p className="flex items-center gap-2">
              Больше <FaArrowRightLong />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Каталог;