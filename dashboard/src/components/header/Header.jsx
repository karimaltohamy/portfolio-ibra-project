import { useLocation } from "react-router-dom";
import imgProfile from "../../assets/images/user-1.jpg";
import "./header.scss"

const Header = () => {
  const {pathname} = useLocation()

  if (pathname === "/login") {
    return;
  }


  return (
    <div className="header">
      <div className="left">
        <div className="icon_menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </div>
        <div className="input_search">
          <input type="text" placeholder="Search..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="right">
        <div className="nav_item">
          <div className="head">
            <img
              className="img_profile"
              src={imgProfile}
              alt="user-1"
              loading="lazy"
            />
          </div>
          <div className="list list2">
            <h4 className="title">Profile</h4>
            <div className="profile">
              <img src={imgProfile} alt="user-1" loading="lazy" />
              <div className="text">
                <div className="name">Mathew Anderson</div>
                <div className="position">Designer</div>
                <div className="email">
                  <i className="fa-regular fa-envelope"></i>
                  <span>Info@example.com</span>
                </div>
              </div>
            </div>
            <a href="login.html" className="btn_logout">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
