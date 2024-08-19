import React, {memo} from "react";
import { SlUserFemale } from "react-icons/sl";

const Manage = () => {
  return (
    <div className="w-full bg-gray-100 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className=" object-cover  ">
        <SlUserFemale className="text-6xl" />
        </div>
        <b>Madina Abduvahobova</b>
        <p>
          <b>99-000-00-00</b>
        </p>
      </div>
    </div>
  );
};

export default memo (Manage);