import React from "react";
import "./Checkout.css";
import Subtotal from "../componentes/Subtotal";
import CheckoutProduct from "../componentes/CheckoutProduct";
import { useStateValue } from "../context/StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  // "?" optional chaining due to async
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/03/credit/img20/EoSS/eos_2020_maple_p_770x60._CB406658813_.jpg"
          alt="banner_ad"
        />
        <div>
          <h3>Hello, {user ? user?.email : "Guest"}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
