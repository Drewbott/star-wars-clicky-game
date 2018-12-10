import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
  <div className="logo">
  <img alt="logo" src="/assets/images/logo.png"></img>
  </div>
    <h1>Clicky Game!</h1>
    <h2>
      Click on an image to earn points, but don't click on any more than once!
    </h2>
  </header>
);

export default Header;
