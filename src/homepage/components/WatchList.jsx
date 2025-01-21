import React from "react";
import Stock from "./Stock";
import "../styles/WatchList.css";

const WatchList = ({ stocksData }) => {
  return (
    <div className="watchlist">
      <h3>Watchlist</h3>
      {stocksData.map((stock, index) => (
        <Stock key={index} stock={stock} />
      ))}
    </div>
  );
};

export default WatchList;
