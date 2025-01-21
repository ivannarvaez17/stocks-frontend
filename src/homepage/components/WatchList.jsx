import React from "react";
import InformationSection from "../../shared/components/InformationSection";
import Stock from "./stock/Stock"; 
import "../styles/WatchList.css";

const WatchList = ({ stocksData }) => {
  return (
    <InformationSection
      title="Watchlist"
      content={stocksData.map((stock, index) => (
        <Stock key={index} stock={stock} />
      ))}
    />
  );
};

export default WatchList;
