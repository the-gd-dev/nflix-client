import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import ManageProfiles from "../pages/ManageProfiles/ManageProfiles";
import Register from "../pages/Register/Register";
import Settings from "../pages/Settings/Settings";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import { fetchUser } from "../store/auth/actions";
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <GuestRoute>
            <Login />
          </GuestRoute>
        </Route>
        <Route exact path="/login">
          <GuestRoute>
            <Redirect to="/" />
          </GuestRoute>
        </Route>
        <Route exact path="/change-password/:token">
          <GuestRoute>
            <ChangePassword />
          </GuestRoute>
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
        <Route exact path="/settings">
          <ProtectedRoute>
            <Settings />
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
