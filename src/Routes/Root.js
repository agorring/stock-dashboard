import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import StateProvider from "../components/StateProvider";
const Root = () => {
  return (
    <StateProvider>
      <div
        className="h-screen w-screen grid grid-cols-6 grid-rows-1 auto-rows-fr gap-6 px-10 font-quicksand bg-white"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div className="col-span-1 row-span-1">
          <Header />
        </div>
        <div className="h-screen col-span-5 row-span-1">
          <Outlet />
        </div>
      </div>
    </StateProvider>
  );
};

export default Root;
