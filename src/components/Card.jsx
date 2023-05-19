import React from "react";
import { BsThreeDots } from "react-icons/bs";
const Card = (props) => {
  return (
    <div className="shadow-md bg-white text-slate-900 rounded-md p-8 col-span-3 relative cursor-pointer transition-all duration-500 hover:bg-slate-100">
      <div className="flex items-center gap-8">
        <div className="text-5xl">{props.icon}</div>
        <div>
          <h1 className="text-sm mb-2">Follower</h1>
          <p className="text-5xl">{props.num}</p>
        </div>
      </div>
      <BsThreeDots className="absolute top-3 right-5 text-2xl transition-all duration-500 hover:scale-125" />
    </div>
  );
};

export default Card;
