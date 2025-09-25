import React, { useContext, useState } from "react";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Rating from "@mui/material/Rating";

function ProductCard({ product, flex, renderDesc, renderAdd, amount }) {
  if (!product || !product.image) {
    return null; // or return a placeholder component or default content
  }

  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);
  const [buttonVisible, setButtonVisible] = useState(true);

  const hideButton = () => {
    setButtonVisible(false);
  };

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

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
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={3.5} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <p>Price: ${price}</p>
        {!hideButton && (
          <button onClick={addToCart} className={classes.button}></button>
        )}

        <div>{<CurrencyFormat amount={amount} />}</div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
