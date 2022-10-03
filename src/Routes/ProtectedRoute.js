import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = useSelector((state) => state.auth.user);
  return loggedInUser ? children : <Redirect to="/" />;
};

export default ProtectedRoute;
