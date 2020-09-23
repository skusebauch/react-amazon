import React from "react";
import { useStateValue } from "../context/StateProvider";
import * as actionType from "../context/reducer/actionTypes";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  // pull items from the data layer {basket} = state
  const [{ basket }, dispatch] = useStateValue();

  // to debug
  console.log("this is the basket --->", basket);
  //dispatch the item to the data layer
  const addToBasket = () => {
    dispatch({
      type: actionType.ADD_TO_BASKET,
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small>€</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
