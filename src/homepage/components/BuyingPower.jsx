import React from "react";
import InformationSection from "../../shared/components/InformationSection"; 
import "../styles/BuyingPower.css";

const BuyingPower = ({ buyingPower }) => {
    console.log("buyingPower",buyingPower)
  return (
    <InformationSection
      title="Buying Power"
      content={<h2>${buyingPower.toFixed(2)}</h2>}
      footer={<button className="deposit-button">+ Deposit</button>}
    />
  );
};

export default BuyingPower;
