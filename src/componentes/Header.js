import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../context/StateProvider";

// Material UI
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { auth } from "../Keys/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const authHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={authHandler} className="header__item">
            <span className="header__itemLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__itemLineSecond">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__item">
          <span className="header__itemLineOne">Returns</span>
          <span className="header__itemLineSecond">& Orders</span>
        </div>
        <div className="header__item">
          <span className="header__itemLineOne">Your</span>
          <span className="header__itemLineSecond">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__itemBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header__itemLineSecond header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
