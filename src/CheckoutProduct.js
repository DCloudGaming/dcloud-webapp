import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, hourlyRate, rating, hideButton }) {
  const [dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct mb-5">
      <img alt="img" className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p>{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{hourlyRate}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))} */}
        </div>
        {!hideButton && (
          <button className="button-secondary" onClick={removeFromBasket}>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
