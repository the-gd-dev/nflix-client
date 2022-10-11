import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateCurrentWatching } from "../../../store/auth/actions";
import AvtarImage from "../../UI/AvtarImage/AvtarImage";

//single profile in the dropdown
const DropDownProfile = ({ avatar, name, profile }) => {
  const dispatch = useDispatch();
  const switchProfile = () => dispatch(updateCurrentWatching({ current_watching: profile }));
  return (
    <li className="dropdown__profile" onClick={switchProfile}>
      <div className="selected__profile" style={{ width: "80%" }}>
        <AvtarImage avatar={avatar} height={30} width={30} />
        <span className="username small-font">{name}</span>
      </div>
    </li>
  );
};
// DropDown
const MenuDropDown = ({ user, onLogout }) => {
  const history = useHistory();
  const [userProfiles, setUserProfiles] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    const currentWatchingProfile = user.current_watching;
    const restProfiles = user.profiles.filter((p) => p._id !== currentWatchingProfile._id);
    setUserProfiles([currentWatchingProfile, ...restProfiles]);
    console.log(userProfiles);
  }, [user]);
  const selectProfiles = () => {
    history.push("/manage-profiles");
  };
  const settingsPage = () => {
    history.push("/settings");
  };
  return (
    <div className="user-profile">
      <div
        className="selected__profile"
        onMouseOver={() => setShowDropDown(!showDropDown)}
      >
        <AvtarImage avatar={user.current_watching.avatar} height={40} width={40} />
        <span className="down-trigger"></span>
      </div>
      {showDropDown && (
        <div className="User__Opts" onMouseLeave={() => setShowDropDown(false)}>
          <ul>
            {userProfiles.map((profile) => (
              <DropDownProfile
                name={profile.name}
                avatar={profile.avatar}
                key={profile._id}
                profile={profile}
              />
            ))}

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
      )}
    </div>
  );
};

export default MenuDropDown;
