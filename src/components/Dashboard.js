import React from "react";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import Feed from "./Feed";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchQuote, fetchStockDetails } from "../api/stock-api";
import Search from "./Search";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };
    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);
  return (
    <div
      className={`h-screen grid grid-cols-9 grid-rows-10 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-black text-gray-300" : "bg-white"
      }`}
    >
      <div className="col-span-2 row-span-8 flex justify-start">
        <Header />
      </div>

      <div className="col-span-4 row-span-6 flex flex-col justify-start">
        <div className="mb-4">
          <Search />
        </div>
        <div className="overflow-y-auto">
          <Feed stockDetails={stockDetails} />
        </div>
      </div>

      <div className="col-span-3 row-span-6 flex flex-col justify-start">
        <div className="mb-4">
          <Overview
            symbol={stockSymbol}
            price={quote.pc}
            change={quote.dc}
            changePercentage={quote.dp}
            currency={stockDetails.currency}
          />
        </div>
        <div className="mb-4">
          <Details details={stockDetails} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
