// App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import TotalInvesting from "./homepage/components/TotalInvesting";
import BuyingPower from "./homepage/components/BuyingPower";
import WatchList from "./homepage/components/WatchList";

const App = () => {
 

   let [data, setData] = useState(null);
  console.log("data",data)
    data = {
    "totalInvesting": {
        "total": 600.55,
        "percentageChange": "-0.92"
    },
    "buyingPower": 545.55,
    "stocksData": [
        {
            "name": "Apple Inc.",
            "ticker": "AAPL",
            "opening": "232.115",
            "closing": "229.98",
            "average": "230.4794",
            "change": "2.1350000000000193",
            "percentageChange": "-0.92",
            "imgUrl": "https://logo.clearbit.com/apple.com"
        },
        {
            "name": "Spotify Technology S.A.",
            "ticker": "SPOT",
            "opening": "487",
            "closing": "485.53",
            "average": "485.3789",
            "change": "1.4700000000000273",
            "percentageChange": "-0.3",
            "imgUrl": "https://logo.clearbit.com/spotify.com"
        },
        {
            "name": "Adobe Inc.",
            "ticker": "ADBE",
            "opening": "434.345",
            "closing": "429.99",
            "average": "430.5656",
            "change": "4.355000000000018",
            "percentageChange": "-1",
            "imgUrl": "https://logo.clearbit.com/adobe.com"
        },
        {
            "name": "Lyft, Inc.",
            "ticker": "LYFT",
            "opening": "13.75",
            "closing": "13.41",
            "average": "13.4934",
            "change": "0.33999999999999986",
            "percentageChange": "-2.47",
            "imgUrl": "https://logo.clearbit.com/lyft.com"
        }
    ]
}
  const { totalInvesting, buyingPower, stocksData } = data;

  return (
    <div className="app-container">
      <TotalInvesting 
        total={totalInvesting.total} 
        percentageChange={totalInvesting.percentageChange} 
      />
      <BuyingPower buyingPower={buyingPower} />
      <WatchList stocksData={stocksData} />
    </div>
  );
};

export default App;