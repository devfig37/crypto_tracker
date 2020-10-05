import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((res) => {
      setCoins(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="coin-app">
      <img className="coin-photo" src="./coinlogo1.png"></img>
      <div className="coin-search">
        <h1 className="coin-text">Crypto Currency Tracker</h1>
        <form className="coin-box">
          <input
            type="text"
            placeholder="Type the company name here..."
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="coin-table">
        <table>
          <thead>
            <tr>
              <th className="company-icon">Company Icon</th>
              <th className="company-name">Company Name</th>
              <th className="symbol">Symbol</th>
              <th className="current-price">Current Price</th>
              <th className="total-volume">Total Volume</th>
              <th className="price">Price Percentage Change</th>
              <th className="market-cap">Market Cap</th>
            </tr>
          </thead>
        </table>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
