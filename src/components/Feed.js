import React from "react";
import Chart from "./Chart";
import TextPost from "./TextPost";

const Feed = ({ stockDetails }) => {
  return (
    <div className="h-full w-full mx-auto overflow-y-auto scrollbar-hide">
      <div className="mb-4 h-60">
        {" "}
        {/* Set a fixed height of 48 */}
        <Chart name={stockDetails.name} />
      </div>
      <div className="mb-4">
        {" "}
        {/* Set a fixed height of 48 */}
        <TextPost text="Yields are rising because the Fed is collapsing M2 Money Supply for the first time since the Great Depression. There simply aren't enough Dollars to cover debt issuance anymore. This will lead to a massive insolvency crisis, fully engineered by the Federal Reserve." />
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
      <div className="mb-4 h-60">
        {" "}
        {/* Set a fixed height of 48 */}
        <Chart />
      </div>
    </div>
  );
};

export default Feed;
