import React from "react";
import { AiOutlineStock } from "react-icons/ai";
const Card = () => {
  return (
    <div className="bg-slate-800 text-white rounded-md p-5 col-span-2">
      <div className="flex items-center gap-5">
        <AiOutlineStock className="text-5xl" />
        <div>
          <h1 className="text-xl mb-1">Blog Reaches</h1>
          <p className="text-lg">20,330</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
