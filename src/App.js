import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Keys/firebase";
import { useStateValue } from "./context/StateProvider";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import * as actionType from "./context/reducer/actionTypes";
import Header from "./componentes/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";

// stripe public key
const stripePromise = loadStripe(
  "pk_test_51HVas4K0tWcXfVHnkqRaZUrIrrZsnrNNGXOgVSOibweuSAgPTIQv8ZsPhWpMjV5pntALaV2gYUtx9uQC6aAYX7RK00xjSljoS6"
);

function App() {
  const [{}, dispatch] = useStateValue();

  // listen to the auth
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user --> ", authUser);
      if (authUser) {
        dispatch({
          type: actionType.SET_USER,
          user: authUser,
        });
      } else {
        // the user is logged out - user should be null
        dispatch({
          type: actionType.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  // BEM
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
