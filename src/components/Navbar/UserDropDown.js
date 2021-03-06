import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import userIcon from "../../assets/images/user.jpg";
import { removeAuthUser, removeToken } from "../../store/auth/actions";

const UserDropDown = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
    if (confirm("Are you sure")) {
      dispatch(removeToken());
      dispatch(removeAuthUser());
      history.push("/");
    }
  };
  const selectProfiles = () => {
    history.push("/manage-profiles");
  }
  const settingsPage = () => {
    history.push("/settings");
  }
  return (
    <div className="user-profile">
      <div className="selected__profile">
        <img src={userIcon} alt="Netflix Clone" height="30" />
        <span className="username">{user.name}</span>
      </div>
      <div className="User__Opts">
        <ul>
          <li className="NoStyle">
            <div className="selected__profile" style={{ width: "80%" }}>
              <img src={userIcon} alt="Netflix Clone" height="30" />
              <span className="username">{user.name}</span>
            </div>
          </li>
          <li onClick={selectProfiles}>
            <i className="fa fa-users"></i> Manage Profiles
          </li>
          <li onClick={settingsPage}>
            <i className="fa fa-cog"></i> Settings
          </li>
          <li onClick={logOut}>
            <i className="fa fa-sign-out"></i> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropDown;
