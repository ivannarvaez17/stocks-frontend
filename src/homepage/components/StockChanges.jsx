import React from "react";
import "../styles/StockChanges.css";

const StockChanges = ({ closing, percentageChange }) => {
  return (
    <div className="stock-changes">
      <p className="closing-value">${closing}</p>
      <p className={percentageChange.startsWith("-") ? "negative" : "positive"}>
        {percentageChange}%
      </p>
    </div>
  );
};

export default StockChanges;
