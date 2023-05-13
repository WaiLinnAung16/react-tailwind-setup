import React from "react";
import { SideNav } from "./SideNav";

const SideBar = () => {
  return (
    <div className="col-span-2 h-screen bg-slate-50 fixed shadow-md">
      <div className="flex flex-col items-center my-5">
        <SideNav />
      </div>
    </div>
  );
};

export default SideBar;
