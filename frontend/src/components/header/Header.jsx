import logoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./header.scss";
import MenuMobile from "../menuMobile/MenuMobile";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className=" py-3">
      <div className="container m-auto">
        <div className="line flex items-center justify-between">
          <Link to="/">
            <img
              src={logoImg}
              alt="logo"
              loading="lazy"
              className="w-[40px]  md:w-[55px]"
            />
          </Link>
          <div className="info flex items-center gap-3">
            {/* <Link to="/contact-us" className="flex items-center gap-1">
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[18px] "
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link> */}
            <div className="btn_menu" onClick={() => setOpenMenu(true)}>
              <input
                hidden=""
                className=" hidden"
                id="check-icon"
                name="check-icon"
                type="checkbox"
              />
              <label className="icon-menu" htmlFor="check-icon">
                <div className="bar bar--1"></div>
                <div className="bar bar--2"></div>
                <div className="bar bar--3"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <MenuMobile openMenu={openMenu} setOpenMenu={setOpenMenu} /> 
    </header>
  );
};

export default Header;
