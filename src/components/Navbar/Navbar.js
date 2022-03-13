import "./Navbar.css";
import React, { useEffect } from "react";
import userIcon from "../../assets/images/user.jpg";
import { useSelector } from "react-redux";
import NetflixSvgLogo from "../NetflixSvgLogo";
function Navbar() {
  const userState = useSelector((state) => state.user);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar-main");
      navbar.classList.remove("sticky");
      if (this.scrollY > 0) {
        navbar.classList.add("sticky");
      }
    });
  }, []);
  return (
    <nav className="navbar" id="navbar-main">
      <div className="branding">
        <NetflixSvgLogo />
      </div>
      <div className="user-profile">
        <div className="selected__profile">
          <img src={userIcon} alt="Netflix Clone" height="30" />
          <span className="username">Netflix User</span>
        </div>
        <div className="User__Opts">
          <ul>
            <li className="NoStyle">
              <div className="selected__profile" style={{width : '80%'}}>
                <img src={userIcon} alt="Netflix Clone" height="30" />
                <span className="username">NetflixUser</span>
              </div>
            </li>
            <li>
              <i className="fa fa-users"></i> Manage Profiles
            </li>
            <li>
              <i className="fa fa-cog"></i> Settings
            </li>
            <li>
              <i className="fa fa-sign-out"></i> Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
