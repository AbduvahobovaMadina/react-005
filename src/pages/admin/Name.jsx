import React, {memo} from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Name = () => {
    return (
      <div className="w-full bg-gray-100 h-screen flex flex-col text-center p-12 gap-9 items-center justify-center">
        <div className="text-4xl ">
        <FaRegUserCircle />
        </div>
        <b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sed nisi eum mollitia, laborum odio veritatis odit pariatur rem dolorum.</b>
      </div>
    );
  };
  
  export default memo (Name);