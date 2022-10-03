import "./Navbar.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NetflixSvgLogo from "../NetflixSvgLogo";
import UserDropDown from "./UserDropDown";
import { useHistory } from "react-router-dom";
function Navbar() {
  const history = useHistory();
  const stateUser = useSelector((state) => state.auth.user);
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
      <div className="branding" onClick={() => history.push('/browse')}>
        <NetflixSvgLogo />
      </div>
      {stateUser ? <UserDropDown user={stateUser} /> : null}
    </nav>
  );
}

export default Navbar;
