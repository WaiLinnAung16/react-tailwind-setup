import React from "react";
import Path from "./routes/Path";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="ml-[440px] p-5 bg-slate-100 h-screen w-full">
          <Path />
        </div>
      </div>
    </div>
  );
};

export default App;
