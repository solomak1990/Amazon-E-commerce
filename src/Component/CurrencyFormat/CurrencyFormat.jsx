import React from "react";

function CurrencyFormat({ amount }) {
  if (typeof amount !== "number" || isNaN(amount)) {
    return null; 
  }

  const formattedAmount = `$${amount.toFixed(2)}`;
  // const formattedAmount = number(amount).format("$0,0.00")

  return <span>{formattedAmount}</span>;
}

export default CurrencyFormat;
