import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <table>
      <tbody>
        <tr className="coin-row">
          <td>
            <img src={image} alt="crypto" />
          </td>
          <td>
            <h1>{name}</h1>
          </td>

          <td className="coin-symbol">{symbol}</td>
          <td>${price}</td>
          <td>${volume.toLocaleString()}</td>
          <td>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
          </td>
          <td>${marketcap.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Coin;
