import React, { useState } from "react";
import StockContext from "../context/StockContext";

const StateProvider = ({ children }) => {
  const [stockSymbol, setStockSymbol] = useState("AAPL");

  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      {children}
    </StockContext.Provider>
  );
};

export default StateProvider;
