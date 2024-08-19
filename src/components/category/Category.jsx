import React,{memo} from 'react'
import "./category.css"

import img1 from "../../assets/klipartz 1.png";
import img2 from "../../assets/kisspng-himalayas-light-himalayan-salt-wbm-himalayan-1003-salt-lamp-5b1c090d888e67 1.png";
import img3 from "../../assets/kisspng-frying-pan-bread-frying-pan-5a74c9c81fd8d9 1.png";
import img4 from "../../assets/kisspng-garden-hoses-pressure-washers-tap-hose-5ac6cdfcce65c8 1.png";
import img5 from "../../assets/5a1ccbd51c0c21 1.png";
import img6 from "../../assets/kisspng-antibacterial-soap-safeguard-soap-5b1790acbd6356 1.png";
import img7 from "../../assets/5a1c81acca3c83 1.png";
import img8 from "../../assets/5a35220cc154b5 1.png";
import img9 from "../../assets/kisspng-bedside-tables-pedestal-desk-buffets-sideboards-european-style-luxury-5adff801eba1c1 1.png";
import img10 from "../../assets/kisspng-cooking-ranges-oven-electric-stove-gas-stove-cooke-gas-cooker-5ad896f6ded7d9 1.png";

const card = [
  {
    img: img1,
    title: "Диваны",
  },
  {
    img: img2,
    title: "Спальная",
  },
  {
    img: img3,
    title: "Кухня",
  },
  {
    img: img4,
    title: "Для сада",
  },
  {
    img: img5,
    title: "Мебель",
  },
  {
    img: img6,
    title: "Гигиена",
  },
  {
    img: img7,
    title: "Товары для отдыха",
  },
  {
    img: img8,
    title: "Зеркала",
  },
  {
    img: img9,
    title: "Гигиена",
  },
  {
    img: img10,
    title: "Кухня и бытовая тех..",
  },
];

const Category = () => {
  return (
    <div className="container ">
      <div className="mt-32 flex items-center mb-4 gap-2 ">
        <b className="text-4xl">Популярные категории</b>
        <sub className="text-2xl">Все категории</sub>
      </div>
      <div className="card__wrap flex items-center flex-wrap justify-center gap-8">
        {card?.map((el, inx) => (
          <div
            key={inx}
            className="card w-52 h-56 border flex  items-center justify-center relative  gap-2 flex-col"
          >
            <div>
              <img src={el.img} alt="" />
            </div>

            <b className="flex absolute bottom-3">{el.title}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo (Category);