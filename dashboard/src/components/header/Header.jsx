import { useLocation, useNavigate } from "react-router-dom";
import imgProfile from "../../assets/images/user-1.jpg";
import "./header.scss";
import { useContext, useState } from "react";
import { UserContaxt } from "../../context/AuthContext";

const Header = () => {
  const { pathname } = useLocation();
  const [openList, setOpenList] = useState(false);
  const {user, dispatch} = useContext(UserContaxt)
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
    navigate("/login")
  }

  const handleActionSidebar = () => {
    if (window.innerWidth >= 768) {
      document.querySelector(".sidebar").classList.toggle("remove_elemnts")
    }else if (window.innerWidth <= 768) {
      document.querySelector(".sidebar").classList.toggle("open_sidebar")
      document.querySelector(".overflow_sidebar").classList.toggle("active")
    }
  }

  if (pathname === "/login") {
    return;
  }

  return (
    <div className="header">
      <div className="left">
        <div className="icon_menu" onClick={handleActionSidebar}>
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
          <div className="head" onClick={() => setOpenList(!openList)}>
            <img
              className="img_profile"
              src={imgProfile}
              alt="user-1"
              loading="lazy"
            />
          </div>
           <div className={`list ${openList && "active"}`}>
            <h4 className="title">Profile</h4>
            <div className="profile">
              <img src={imgProfile} alt="user-1" loading="lazy" />
              <div className="text">
                <div className="name"> {user && user.firstName} {user && user.lastName}</div>
                <div className="email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <span>{user && user.email}</span>
                </div>
              </div>
            </div>
            <button className="btn_logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
