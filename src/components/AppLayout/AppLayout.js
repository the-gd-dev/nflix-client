import React from "react";
import Navbar from "../Navbar/Navbar";
import "./AppLayout.css";
const AppLayout = ({ children, bg, overlay, customClasses }) => {
  var windowWidth = window.innerWidth;
  return (
    <div
      className={`App ${customClasses?.join(" ")}`}
      style={windowWidth > 768 ? { backgroundImage: `url(${bg})` } : {}}
    >
      {overlay ? <div className="overlay"></div> : null}
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
