import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>{price}</strong>
          <small>€</small>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
