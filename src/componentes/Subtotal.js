import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer/reducer";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({basket?.length} items):
              <strong> {value}</strong>
              <small> €</small>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
