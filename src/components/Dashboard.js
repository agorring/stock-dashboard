import React from "react";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchQuote, fetchStockDetails } from "../api/stock-api";

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
      className={`h-screen grid grid-cols-9 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand bg-neutral-100 ${
        darkMode ? "bg-black text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-2 row-span-8 flex justify-start">
        <Header />
      </div>
      <div className="md:col-span-4 row-span-4 flex justify-center items-center">
        <Chart name={stockDetails.name} />
      </div>
      <div className="md:col-span-3 row-span-4">
        <div className="row-span-2 xl:row-span-2 mb-4">
          <Overview
            symbol={stockSymbol}
            price={quote.pc}
            change={quote.dc}
            changePercentage={quote.dp}
            currency={stockDetails.currency}
          />
        </div>
        <div className="row-span-2 xl:row-span-2">
          <Details details={stockDetails} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
