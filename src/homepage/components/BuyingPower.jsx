import React from "react";
import InformationSection from "../../shared/components/InformationSection";
import "../styles/BuyingPower.css";

const BuyingPower = ({ buyingPower }) => {
  return (
    <InformationSection
      title="Buying Power"
      content={
        <div className="buying-power-content">
          <h2>${buyingPower.toFixed(2)}</h2>
          <button className="deposit-button">+ Deposit</button>
        </div>
      }
    />
  );
};

export default BuyingPower;
