import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../context/StateProvider";

// Material UI
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

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
        <Link to="/login">
          <div className="header__item">
            <span className="header__itemLineOne">Hello Guest</span>
            <span className="header__itemLineSecond">Sign In</span>
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
