import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-6 grid-rows-1 auto-rows-fr gap-6 p-10 font-quicksand bg-white">
      <div className="col-span-1 row-span-1">
        <Header />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
