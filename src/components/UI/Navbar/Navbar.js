import "./Navbar.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NetflixSvgLogo from "../../Icons/NetflixSvgLogo";
import UserDropDown from "./UserDropDown";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
function Navbar() {
  const history = useHistory();
  const stateUser = useSelector((state) => state.auth.user);
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
    <nav className="navbar" id="navbar-main">
      <Modal>
        <h1>Hello world</h1>
      </Modal>
      <div className="branding" onClick={() => history.push("/browse")}>
        <NetflixSvgLogo />
      </div>
      {stateUser ? <UserDropDown user={stateUser} /> : null}
    </nav>
  );
}

export default Navbar;
