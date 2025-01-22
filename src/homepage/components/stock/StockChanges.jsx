import React from "react";
import "../../styles/stock/StockChanges.css";

const StockChanges = ({ closing, percentagechange }) => {
  return (
    <div className="stock-changes">
      <p className="closing-value">${closing}</p>
      <p className={percentagechange.startsWith("-") ? "negative" : "positive"}>
        {percentagechange}%
      </p>
    </div>
  );
};

export default StockChanges;
