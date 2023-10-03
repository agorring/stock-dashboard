import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-1 grid-rows-6 md:grid-rows-6 xl:grid-rows-6 auto-rows-fr gap-6 p-10">
        <div className="md:col-span-1 row-span-1 flex items-center">
          <ThemeIcon />
        </div>
        <div className="md:col-span-1 row-span-1 flex items-center">
          <Search />
        </div>
        <div className="md:col-span-1 row-span-1 flex items-center">
          <h1 className="text-3xl">Home</h1>
        </div>
        <div className="md:col-span-1 row-span-1 flex items-center">
          <h1 className="text-3xl">Portfolio</h1>
        </div>
        <div className="md:col-span-1 row-span-1 flex items-center">
          <h1 className="text-3xl">Stocks</h1>
        </div>
        <div className="md:col-span-1 row-span-1 flex items-center">
          <h1 className="text-3xl">Crypto</h1>
        </div>
        <div className="md:col-span-1 row-span-1 flex items-center">
          <h1 className="text-3xl">News</h1>
        </div>
        <div className="md:col-span-1 row-span-1 flex items-center">
          <h1 className="text-3xl">Profile</h1>
        </div>
        {/* Add three empty rows */}
        <div className="md:col-span-1 row-span-1"></div>
        <div className="md:col-span-1 row-span-1"></div>
        <div className="md:col-span-1 row-span-1"></div>
      </div>
    </>
  );
};

export default Header;
