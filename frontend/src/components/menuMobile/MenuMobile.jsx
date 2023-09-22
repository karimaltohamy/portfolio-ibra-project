import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./menuMobile.scss";

const MenuMobile = ({openMenu, setOpenMenu}) => {
  return (
    <div className={`menu_mobile ${openMenu ? "open" : ""}`}>
      <div className="content">
        <div className="head">
          <div className="logo">
            <img src={logo} alt="logo-img" loading="lazy" />
          </div>
          <div className="close_menu" onClick={() => setOpenMenu(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="links">
          <div className="link" onClick={() => setOpenMenu(false)}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </div>
          <div className="link" onClick={() => setOpenMenu(false)}>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
          </div>
          <div className="link" onClick={() => setOpenMenu(false)}>
            <NavLink
              to="/contact-me"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact me
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
