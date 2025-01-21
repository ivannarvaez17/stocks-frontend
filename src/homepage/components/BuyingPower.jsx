import React from "react";
import "../styles/BuyingPower.css";

const BuyingPower = ({ buyingPower }) => {
  return (
    <div className="buying-power">
      <h1>Buying Power</h1>
      <h2>${buyingPower.toFixed(2)}</h2>
      <button className="deposit-button">+ Deposit</button>
    </div>
  );
};

export default BuyingPower;
