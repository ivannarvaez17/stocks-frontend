import React from "react";
import StockImage from "./StockImage";
import StockTitle from "./StockTitle";
import StockSubtitle from "./StockSubtitle";
import StockChanges from "./StockChanges";
import "../../styles/stock/Stock.css";

const Stock = ({ stock }) => {
  const { ticker, name, closing, percentagechange, imgurl } = stock;

  return (
    <div className="stock-item">
      <div className="stock-info">
        <StockImage imgurl={imgurl} ticker={ticker} />
        <div>
          <StockTitle title={ticker} />
          <StockSubtitle subtitle={name} />
        </div>
      </div>
      <StockChanges closing={closing} percentagechange={percentagechange} />
    </div>
  );
};

export default Stock;
