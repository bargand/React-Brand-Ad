import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img src="/images/brand_logo.png" alt="" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/menu" className="listStyle">
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/location" className="listStyle">
              LOCATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="listStyle">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="listStyle">
              CONTACT
            </NavLink>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}
