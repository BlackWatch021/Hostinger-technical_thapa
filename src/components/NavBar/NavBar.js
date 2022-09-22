import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import close from "../../images/close.svg";
import menu from "../../images/menu.svg";

const NavBar = () => {
  let [barHide, setBarHide] = useState(true);

  const showIt = () => {
    setBarHide(false);
  };
  const hideIt = () => {
    setBarHide(true);
  };

  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <img src={logo} />
      </div>
      <div className="pc_nav">
        <a href="">Hosting</a>
        <a href="">VPS</a>
        <a href="">Email</a>
        <a href="">Domain</a>
        <button>Log In</button>
        <img className="menu_show" onClick={showIt} src={menu} alt="" />
      </div>
      <div
        className="responsive_navBar"
        style={
          barHide
            ? { transform: "translateX(330px)" }
            : { transform: "translateX(0px)" }
        }
      >
        <img className="menu_hide" onClick={hideIt} src={close} alt="" />
        <a href="">Hosting</a>
        <a href="">VPS</a>
        <a href="">Email</a>
        <a href="">Domain</a>
        <button>Log In</button>
      </div>
    </div>
  );
};

export default NavBar;
