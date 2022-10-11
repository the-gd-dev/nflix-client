import React from "react";
import appConfig from "../../config/appConfig";
import CheckIcon from "../Icons/CheckIcon";
import PencilIcon from "../Icons/PencilIcon";
import classes from "./SingleProfile.module.css";
const SingleProfie = (props) => {
  const { profile, showEdit, onEdit, showDone, onDone, onAvatarClick, activeProfile } = props;
  return (
    <div
      className={`${classes["single-profile"]} ${activeProfile ? classes["watching"] : ""}`}
      onClick={() => onAvatarClick && onAvatarClick(profile)}
    >
      <div
        className={classes["bg-img"]}
        style={{
          background: `url(${appConfig.assetsUrl}/images/avatars/${profile.avatar}.png) center no-repeat`,
        }}
      >
        {showEdit && (
          <div className={classes.actions}>
            <button className={classes["profile-edit"]} onClick={() => onEdit(profile)}>
              <PencilIcon />
            </button>
          </div>
        )}
        {showDone && (
          <div className={classes.actions}>
            <button className={classes["profile-edit"]} onClick={() => onDone(profile)}>
              <CheckIcon />
            </button>
          </div>
        )}
      </div>
      {profile.name && <div className={classes["profile-name"]}>{profile.name}</div>}
    </div>
  );
};

export default SingleProfie;
