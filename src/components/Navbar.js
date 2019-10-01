import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import Logo from "../images/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img src={Logo} alt="Logo" className="Navbar__brand-logo" />
            <span className="font-weight-ligth">Conference </span>
            <span className="font-weight-bold" style={{ marginLeft: "5px" }}>
              Badges
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
