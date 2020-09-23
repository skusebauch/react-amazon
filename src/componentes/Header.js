import React from "react";
import "./Header.css";

// Material UI
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className="header__search">
        <input className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__item">
          <span className="header__itemLineOne">Hello Guest</span>
          <span className="header__itemLineSecond">Sign In</span>
        </div>
        <div className="header__item">
          <span className="header__itemLineOne">Returns</span>
          <span className="header__itemLineSecond">& Orders</span>
        </div>
        <div className="header__item">
          <span className="header__itemLineOne">Your</span>
          <span className="header__itemLineSecond">Prime</span>
        </div>
        <div className="header__itemBasket">
          <ShoppingCartOutlinedIcon />
          <span className="header__itemLineSecond header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
