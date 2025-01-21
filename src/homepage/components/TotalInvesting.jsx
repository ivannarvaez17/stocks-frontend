import React from "react";
import "../styles/TotalInvesting.css";

const TotalInvesting = ({ total, percentageChange }) => {
  return (
    <div className="total-investing-container">
      <div className="total-investing">
        <h1>Total Investing</h1>
        <h2>${total.toFixed(2)}</h2>
        <p
          className={
            percentageChange.startsWith("-") ? "negative-change" : "positive-change"
          }
        >
          {percentageChange}%
        </p>
      </div>
    </div>
  );
};

export default TotalInvesting;
