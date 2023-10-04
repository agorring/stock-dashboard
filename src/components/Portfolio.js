import React from "react";
import Chart from "./Chart";

const Portfolio = () => {
  return (
    <div className="h-full w-full mx-auto overflow-y-auto scrollbar-hide">
      <div className="mb-4 h-60 flex">
        <div className="w-1/2 mr-2">
          <Chart />
        </div>
        <div className="w-1/2 ml-2">
          <Chart />
        </div>
      </div>
      <div className="mb-4 h-60 flex">
        <div className="w-1/2 mr-2">
          <Chart />
        </div>
        <div className="w-1/2 ml-2">
          <Chart />
        </div>
      </div>
      {/* Add more charts as needed */}
    </div>
  );
};

export default Portfolio;
