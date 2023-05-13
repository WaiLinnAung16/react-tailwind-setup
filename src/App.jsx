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
        <Path />
      </div>
    </div>
  );
};

export default App;
