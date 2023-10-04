import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import Feed from "./Feed";
import Overview from "./Overview";
import Details from "./Details";
import { fetchQuote, fetchStockDetails } from "../api/stock-api";
import StockContext from "../context/StockContext";

const Home = () => {
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchStockDetails(stockSymbol);
        const stockQuote = await fetchQuote(stockSymbol);

        setStockDetails(details);
        setQuote(stockQuote);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [stockSymbol]);

  return (
    <div
      className={`grid grid-cols-10 grid-rows-10 auto-rows-fr gap-6 p-10 font-quicksand bg-white"
      }`}
    >
      <div className="col-span-6 row-span-6 flex flex-col">
        <div className="mb-4">
          <Search />
        </div>
        <div
          className="overflow-y-scroll scrollbar-hide"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <Feed stockDetails={stockDetails} />
        </div>
      </div>

      <div className="col-span-4 row-span-6 flex-col">
        <div className="mb-4 w-full">
          <Overview
            symbol={stockSymbol}
            price={quote.pc}
            change={quote.dc}
            changePercentage={quote.dp}
            currency={stockDetails.currency}
          />
        </div>
        <div className="mb-4 w-full">
          <Details details={stockDetails} />
        </div>
      </div>
    </div>
  );
};

export default Home;
