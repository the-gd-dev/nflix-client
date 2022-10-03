import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const GuestRoute = ({ children }) => {
  const loggedInUser = useSelector((state) => state.auth.user);
  return loggedInUser ? <Redirect to="/browse" /> : children;
};

export default GuestRoute;
