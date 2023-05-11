import React from "react";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
