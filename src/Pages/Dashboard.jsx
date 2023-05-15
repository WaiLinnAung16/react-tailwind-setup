import React from "react";
import profile from "../assets/profile.svg";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold mb-3 text-slate-800">Dashboard</h1>
      <div className="bg-slate-800 rounded-lg px-10 py-8 grid grid-cols-6">
        <div className="col-span-3">
          <div className="text-white flex flex-col items-start gap-4">
            <h1 className="text-5xl font-semibold">Welcome to PayPen</h1>
            <p className="font-light">The best place for pension schem</p>
            <button className="bg-slate-100 rounded-md px-8 py-2 text-slate-900 transition-all duration-500 hover:bg-slate-600 hover:text-white active:bg-slate-700 active:text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-span-3">
          <div>{/* <img src={profile} className="h-[300px]" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
