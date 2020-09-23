import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/Knives_Out/KNIVE_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_3000X1200_PV_de-DE._CB405420316_.jpg"
          alt="banner"
        ></img>
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
