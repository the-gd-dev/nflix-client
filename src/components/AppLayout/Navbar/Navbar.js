import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NetflixSvgLogo from "../../Icons/NetflixSvgLogo";
import UserDropDown from "./UserDropDown";
import { useHistory } from "react-router-dom";
import LogoutModal from "./LogoutModal";
function Navbar() {
  const [logoutModalShow, setLogoutModalShow] = useState(false);
  const history = useHistory();
  const stateUser = useSelector((state) => state.auth.user);
  
  //UseEffect -- singular call
  useEffect(() => {
    const excludedPaths = ["/"];
    function onWindowScroll() {
      const pathname = window.location.pathname;
      const navbar = document.getElementById("navbar-main");
      navbar.classList.remove("sticky");
      if (this.scrollY > 0 && !excludedPaths.includes(pathname)) {
        navbar.classList.add("sticky");
      }
    }
    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return (
    <nav className="navbar" id="navbar-main">
      {logoutModalShow && (
        <LogoutModal
          modalShow={logoutModalShow}
          onHide={() => setLogoutModalShow(false)}
        />
      )}
      <div className="branding" onClick={() => history.push("/browse")}>
        <NetflixSvgLogo />
      </div>
      {stateUser ? (
        <UserDropDown
          user={stateUser}
          onLogout={() => setLogoutModalShow(true)}
        />
      ) : null}
    </nav>
  );
}

export default Navbar;
