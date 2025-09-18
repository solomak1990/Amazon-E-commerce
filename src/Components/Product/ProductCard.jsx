import React from 'react'
import classes from "./product.module.css";
import Rating from "../../Pages/Rating/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from 'react-router-dom';

function ProductCard({product}) {
  const { image, title, id, rating, price } = product;

  return (
    <div className={`${classes.card_container}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>

      <div>
        <h3>{title}</h3>

        {/* Rating */}
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button}>
          add to cart
          </button>
      </div>
    </div>
  );
}

export default ProductCard;
