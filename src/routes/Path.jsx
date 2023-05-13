import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Blog from "../Pages/Blog";
import Team from "../Pages/Team";
import Home from "../Pages/Home";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default Path;
