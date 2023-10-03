import React from "react";
import Chart from "./Chart";

const Feed = ({ stockDetails }) => {
  return (
    <div className="h-full w-full mx-auto overflow-y-auto scrollbar-hide">
      <div className="mb-4 h-48">
        {" "}
        {/* Set a fixed height of 48 */}
        <Chart name={stockDetails.name} />
      </div>
      <div className="mb-4 h-48">
        {" "}
        {/* Set a fixed height of 48 */}
        <Chart />
      </div>
      <div className="mb-4 h-48">
        {" "}
        {/* Set a fixed height of 48 */}
        <Chart />
      </div>
      <div className="mb-4 h-60">
        {" "}
        {/* Set a fixed height of 48 */}
        <Chart />
      </div>
      <div className="mb-4 h-60">
        {" "}
        {/* Set a fixed height of 48 */}
        <Chart />
      </div>
    </div>
  );
};

export default Feed;
