import React from "react";
import "../styles/InformationSection.css";

const InformationSection = ({ title, content, footer }) => {
  return (
    <div className="information-section-container">
      <div className="information-section">
        <h1>{title}</h1>
        <div className="content">{content}</div>
        {footer && <div className="footer">{footer}</div>}
      </div>
    </div>
  );
};

export default InformationSection;
