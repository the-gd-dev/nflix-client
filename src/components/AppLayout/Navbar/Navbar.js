import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NetflixSvgLogo from "../../Icons/NetflixSvgLogo";
import MenuDropDown from "./MenuDropDown";
import { useHistory } from "react-router-dom";
import LogoutModal from "./LogoutModal";
function Navbar(props) {
  const [logoutModalShow, setLogoutModalShow] = useState(false);
  const history = useHistory();
  const stateUser = useSelector((state) => state.auth.user);

  //UseEffect -- singular call
  useEffect(() => {
    function onWindowScroll() {
      const navbar = document.getElementById("navbar-main");
      navbar.classList.remove("sticky");
      if (this.scrollY > 0) {
        navbar.classList.add("sticky");
      }
    }
    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return (
    <nav
      className="navbar"
      id="navbar-main"
      style={{
        backgroundColor: props.color,
      }}
    >
      {logoutModalShow && (
        <LogoutModal modalShow={logoutModalShow} onHide={() => setLogoutModalShow(false)} />
      )}
      <div className="branding-and-links">
        <div className="branding" onClick={() => history.push("/browse")}>
          <NetflixSvgLogo />
        </div>
        <ul className="home-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Games</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>

      {stateUser ? (
        <MenuDropDown user={stateUser} onLogout={() => setLogoutModalShow(true)} />
      ) : null}
    </nav>
  );
}

export default Navbar;
