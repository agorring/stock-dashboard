import React, { useState } from "react";
//import ThemeContext from "./context/ThemeContext";
import StockContext from "../context/StockContext";

const StateProvider = ({ children }) => {
  //const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("AAPL");

  return (
    /*<ThemeContext.Provider value={{ darkMode, setDarkMode }}>*/
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      {children}
    </StockContext.Provider>
    /*</ThemeContext.Provider>*/
  );
};

export default StateProvider;
