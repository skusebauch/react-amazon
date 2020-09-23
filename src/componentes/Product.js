import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <strong>20,99</strong>
          <small>€</small>
        </p>
        <div className="product__rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        alt="product"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
