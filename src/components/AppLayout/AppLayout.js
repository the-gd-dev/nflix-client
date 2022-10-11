import React from "react";
import Navbar from "../UI/Navbar/Navbar";
import "./AppLayout.css";
import Footer from "../UI/Footer";
const AppLayout = ({ children, bg, overlay, customClasses }) => {
  var windowWidth = window.innerWidth;
  return (
    <div
      className={`App ${customClasses?.join(" ")}`}
      style={windowWidth > 768 ? { backgroundImage: `url(${bg})` } : {}}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
