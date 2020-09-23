import React from "react";
import "./Home.css";
import Product from "../componentes/Product";

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
          <Product
            title={
              "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            }
            price={9.48}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            }
            rating={5}
          />
          <Product
            title={"Apple iPhone 11 (128 Gb) - Violette"}
            price={754.3}
            image={
              "https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UY436_FMwebp_QL65_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "Elon Musk: Wie Elon Musk die Welt verändert – Die Biografie"
            }
            price={19.99}
            image={
              "https://m.media-amazon.com/images/I/81Dsfho-uML._AC_UY436_FMwebp_QL65_.jpg"
            }
            rating={5}
          />
          <Product
            title={
              'neues Apple MacBook Pro (16", 16GB RAM, 512GB Speicherplatz) - Space Grau'
            }
            price={2719.0}
            image={
              "https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY436_FMwebp_QL65_.jpg"
            }
            rating={5}
          />
          <Product
            title={"Senor Developer | Entwickler Programmierer Nerd Shirt"}
            price={13.49}
            image={
              "https://m.media-amazon.com/images/I/71q1JXoXTBL._AC_UY436_FMwebp_QL65_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title={"Samsung C49HG90DMU LED Monitor (49 Zoll)"}
            price={739.0}
            image={
              "https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY436_FMwebp_QL65_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
