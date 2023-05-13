import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[400px] bg-slate-50 h-[3000px] my-5">
      <div className="flex flex-col gap-2">
        <Link to="/" className="py-2 px-8 bg-slate-300 mx-5">
          home
        </Link>
        <Link to="/blog" className="py-2 px-8 bg-slate-300 mx-5">
          blog
        </Link>
        <p className="py-2 px-8 bg-slate-300 mx-5">team</p>
      </div>
    </div>
  );
};

export default SideBar;
