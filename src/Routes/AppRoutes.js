import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login/Login";
import ManageProfiles from "../containers/ManageProfiles/ManageProfiles";
import Register from "../containers/Register/Register";
import { fetchUser } from "../store/auth/actions";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchUser()) }, [dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <GuestRoute>
            <Login />
          </GuestRoute>
        </Route>
        <Route exact path="/login">
          <GuestRoute />
        </Route>
        <Route exact path="/register">
          <GuestRoute>
            <Register />
          </GuestRoute>
        </Route>
        <Route exact path="/browse">
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        </Route>
        <Route exact path="/manage-profiles">
          <ProtectedRoute>
            <ManageProfiles />
          </ProtectedRoute>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
