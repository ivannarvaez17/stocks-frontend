import React from "react";
import InformationSection from "../../shared/components/InformationSection"; // Import the correct path
import "../styles/TotalInvesting.css";

const TotalInvesting = ({ total, percentageChange }) => {
  return (
    <InformationSection
      title="Total Investing"
      content={<h2>${total.toFixed(2)}</h2>}
      footer={
        <p
          className={
            percentageChange.startsWith("-") ? "negative-change" : "positive-change"
          }
        >
          {percentageChange}%
        </p>
      }
    />
  );
};

export default TotalInvesting;
