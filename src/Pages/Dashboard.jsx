import React from "react";
import Card from "../components/Card";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Chart } from "../components/Chart";
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold mb-3 text-slate-800 ">
        Dashboard
      </h1>
      <div className="grid grid-cols-12 gap-5">
        <Card icon={<FaFacebookF />} num="280k" />
        <Card icon={<FaTwitter />} num="234k" />
        <Card icon={<AiFillInstagram />} num="156k" />
        <Card icon={<FaYoutube />} num="270k" />
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
