import React from "react";
import ReactDOM from "react-dom/client"; // Use the correct import for React 18
import App from "./App";
import "./index.css"; // Optional, if you have global styles

// Get the root element from your HTML
const rootElement = document.getElementById("root");

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
