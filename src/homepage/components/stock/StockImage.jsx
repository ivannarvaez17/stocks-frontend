import React from "react";
import "../../styles/stock/StockImage.css";

const StockImage = ({ imgurl, ticker }) => {
  return <img className="stock-logo" src={imgurl} alt={`${ticker} logo`} />;
};

export default StockImage;
