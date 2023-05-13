import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-xl font-extrabold uppercase mb-3">Dashboard</h1>
      <div className="grid grid-cols-12 gap-5 items-start">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
