import React from "react";
import { useHistory } from "react-router-dom";
import appConfig from "../../../config/appConfig";

const UserDropDown = ({ user, onLogout }) => {
  const history = useHistory();
  const selectProfiles = () => {
    history.push("/manage-profiles");
  }
  const settingsPage = () => {
    history.push("/settings");
  }
  return (
    <div className="user-profile">
      <div className="selected__profile">
        <img src={`${appConfig.assetsUrl}/images/avatars/${user.current_watching.avatar}.png`} alt="Netflix Clone" height="30" />
        <span className="username">{user?.current_watching?.name.split(' ')[0]}</span>
      </div>
      <div className="User__Opts">
        <ul>
          <li className="NoStyle">
            <div className="selected__profile" style={{ width: "80%" }}>
              <img src={`${appConfig.assetsUrl}/images/avatars/${user.current_watching.avatar}.png`} alt="Netflix Clone" height="30" />
              <span className="username small-font">{user?.current_watching?.name.split(' ')[0]}</span>
            </div>
          </li>
          <li onClick={selectProfiles}>
            <i className="fa fa-users"></i> Manage Profiles
          </li>
          <li onClick={settingsPage}>
            <i className="fa fa-cog"></i> Settings
          </li>
          <li onClick={onLogout}>
            <i className="fa fa-sign-out"></i> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropDown;
