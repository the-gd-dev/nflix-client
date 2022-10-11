import React from "react";
import Navbar from "./Navbar/Navbar";
import "./AppLayout.css";
import Footer from './Footer/Footer';
const AppLayout = ({ children, bg, overlay, customClasses, navbarColor }) => {
  var windowWidth = window.innerWidth;
  return (
    <div
      className={`App ${customClasses?.join(" ")}`}
      style={windowWidth > 768 ? { backgroundImage: `url(${bg})` } : {}}
    >
      <Navbar color={navbarColor} />
      {children}
      <Footer textColor={navbarColor} />
    </div>
  );
};

export default AppLayout;
