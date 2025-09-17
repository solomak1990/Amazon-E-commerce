import React from 'react'
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard({product}) {
  const { image, title, id, rating, price } = product;

  return (
    <div className={`${classes.card_container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>

      <div>
        <h3>{title}</h3>

        {/* Rating */}
        <div className={"classes.rating"}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
