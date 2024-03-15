import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <Link to="/" className="logo-link" onClick={closeMobileMenu}>SiriLerGrand</Link>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link to="/booking">BOOKING</Link>
            </li> 
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link to="/booking-details">DETAILS</Link>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link to="/payment">PAYMENT</Link>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link to="/contact">CONTACT</Link>
            </li> 
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
