import React from "react";
import "../../styles/stock/StockImage.css";

const StockImage = ({ imgUrl, ticker }) => {
  return <img className="stock-logo" src={imgUrl} alt={`${ticker} logo`} />;
};

export default StockImage;
