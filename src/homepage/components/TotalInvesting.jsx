import React from "react";
import "../styles/TotalInvesting.css";
import InformationSection from "../../shared/components/InformationSection";

const TotalInvesting = ({ total, percentageChange }) => {
  return (
    <InformationSection
      title="Total Investing"
      content={
        <div className="total-investing-content">
          <h2>${total.toFixed(2)}</h2>
          <footer>
            <p
              className={
                percentageChange.toString().startsWith("-")
                  ? "negative-change"
                  : "positive-change"
              }
            >
              {percentageChange}%
            </p>
          </footer>
        </div>
      }
    />
  );
};

export default TotalInvesting;

