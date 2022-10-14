import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateCurrentWatching } from "../../../store/auth/actions";
import AvtarImage from "../../UI/AvtarImage/AvtarImage";

//single profile in the dropdown
const DropDownProfile = ({ avatar, name, profile }) => {
  const dispatch = useDispatch();
  const switchProfile = () =>
    dispatch(updateCurrentWatching({ current_watching: profile }));
  return (
    <li className="dropdown__profile" onClick={switchProfile}>
      <div className="selected__profile">
        <div className="name__avatar__container">
          <AvtarImage avatar={avatar} height={30} width={30} />

          <span className="username small-font">
            {name.length > 10 ? name.substring(0, 10) + "..." : name}
          </span>
        </div>
        <span>
          <svg
            height="25"
            viewBox="0 0 1792 1792"
            width="25"
            fill="currentColor"
          >
            <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
          </svg>
        </span>
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
    if (user?.profiles?.length > 0) {
      const currentWatchingProfile = user.current_watching;
      const restProfiles = user.profiles.filter(
        (p) => p._id !== currentWatchingProfile._id
      );
      setUserProfiles([currentWatchingProfile, ...restProfiles]);
    }
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
        <AvtarImage
          avatar={user.current_watching.avatar}
          height={40}
          width={40}
        />
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
