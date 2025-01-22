import React, { useEffect, useState } from "react";
import axios from "axios";
import TotalInvesting from "./homepage/components/TotalInvesting";
import BuyingPower from "./homepage/components/BuyingPower";
import WatchList from "./homepage/components/WatchList";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) {
    return (
      <div
        style={{
          color: "white",
          fontSize: "19px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#000"
        }}
      >
        Loading...
      </div>
    );
  }

  const { totalInvesting, buyingPower, stocksData } = data;

  return (
    <div className="app-container">
      <section className="stocks-info">
        <TotalInvesting
          total={totalInvesting.total}
          percentageChange={totalInvesting.percentagechange}
        />
        <BuyingPower buyingPower={buyingPower} />
        <WatchList stocksData={stocksData} />
      </section>
    </div>
  );
};

export default App;
