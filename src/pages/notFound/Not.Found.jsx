import React, {memo} from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex flex-col items-center gap-3">
      <b className="text-lg text-center text-red-600">404</b>
      <p className="text-center">Sahifa topilmadi</p>
      <div className="flex gap-2">
        <button
          className=" border bg-slate-200 p-2 rounded-xl"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
        <button
          className=" border bg-slate-200 p-2 rounded-xl"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default memo (NotFound);