import React, { useState } from "react";
import logo from "../assets/swedbank-logo.svg";
import "../assets/Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header>
      <div className="logo-wrapper">
        <div className="logo-div">
          <img className="logo" src={logo} alt={logo} />
        </div>
        <div>
        <div className="navmenu" onClick={handleClick}><i className={click ? 'i fas fa-times' : 'i fas fa-bars'} /></div>
          <nav className={click ? "nav-menu active" : "nav-menu"}>
            <ul>
              <li>sign in</li>
              <li>sign up</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
