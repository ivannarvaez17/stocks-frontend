// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  let [data, setData] = useState(null);
  console.log("data",data)
    data = {
    "totalInvesting": 600.55,
    "buyingPower": 545.55,
    "stocksData": [
        {
            "name": "Apple Inc.",
            "ticker": "AAPL",
            "opening": "232.115",
            "closing": "229.98",
            "average": "230.4794",
            "change": "2.1350000000000193",
            "percentagechange": "0.92"
        },
        {
            "name": "Spotify Technology S.A.",
            "ticker": "SPOT",
            "opening": "487",
            "closing": "485.53",
            "average": "485.3789",
            "change": "1.4700000000000273",
            "percentagechange": "-0.3"
        },
        {
            "name": "Adobe Inc.",
            "ticker": "ADBE",
            "opening": "434.345",
            "closing": "429.99",
            "average": "430.5656",
            "change": "4.355000000000018",
            "percentagechange": "-1"
        },
        {
            "name": "Lyft, Inc.",
            "ticker": "LYFT",
            "opening": "13.75",
            "closing": "13.41",
            "average": "13.4934",
            "change": "0.33999999999999986",
            "percentagechange": "-2.47"
        }
    ]
}

  const { totalInvesting, buyingPower, stocksData } = data;

  // Mapping stock tickers to logo URLs
  const stockLogos = {
    AAPL: "https://logo.clearbit.com/apple.com", // Apple logo
    SPOT: "https://logo.clearbit.com/spotify.com", // Spotify logo
    ADBE: "https://logo.clearbit.com/adobe.com", // Adobe logo
    LYFT: "https://logo.clearbit.com/lyft.com", // Lyft logo
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.investing}>Total Investing</h1>
        <h2 style={styles.investingValue}>${totalInvesting.toFixed(2)}</h2>
      </div>
      <div style={styles.buyingPower}>
        <p>Buying Power: ${buyingPower.toFixed(2)}</p>
      </div>
      <div style={styles.watchlist}>
        <h3>Watchlist</h3>
        {stocksData.map((stock, index) => (
          <div key={index} style={styles.stockItem}>
            <div style={styles.stockInfo}>
              <img
                src={stockLogos[stock.ticker]}
                alt={`${stock.name} logo`}
                style={styles.logo}
              />
              <div>
                <h4 style={styles.ticker}>{stock.ticker}</h4>
                <p style={styles.stockName}>{stock.name}</p>
              </div>
            </div>
            <div style={styles.stockData}>
              <p style={styles.closingValue}>${stock.closing}</p>
              <p
                style={{
                  color: stock.percentagechange.startsWith("-")
                    ? "red"
                    : "green",
                }}
              >
                {stock.percentagechange}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#ffffff",
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "10px",
    width: "350px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  investing: {
    fontSize: "24px",
  },
  investingValue: {
    fontSize: "32px",
    margin: "5px 0",
  },
  buyingPower: {
    textAlign: "center",
    fontSize: "18px",
    margin: "20px 0",
  },
  watchlist: {
    marginTop: "20px",
  },
  stockItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333333",
    padding: "10px",
    borderRadius: "5px",
    margin: "5px 0",
  },
  stockInfo: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  ticker: {
    fontSize: "18px",
    margin: "0",
  },
  stockName: {
    fontSize: "14px",
    color: "#aaa",
    margin: "0",
  },
  stockData: {
    textAlign: "right",
  },
  closingValue: {
    fontSize: "18px",
    margin: "0",
  },
};

export default App;
