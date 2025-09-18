import React, { useContext, useState } from "react";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Rating from "@mui/material/Rating";

function ProductCard({ product, flex,renderDesc}) {
  const { image, title, id, rating, price, description } = product;

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>
          {description}</div>}
        {/* Rating */}
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating?.count}</small>
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
