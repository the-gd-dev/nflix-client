import React from "react";
import appConfig from "../../config/appConfig";
import CheckIcon from "../Icons/CheckIcon";
import PencilIcon from "../Icons/PencilIcon";

const SingleProfie = ({ profile, showEdit, onEdit, showDone, onDone, onAvatarClick, activeProfile }) => {
  return (
    <div className={"profile__wrap " + (activeProfile ? 'watching' : '')} onClick={() =>  onAvatarClick && onAvatarClick(profile)}>
      <div
        className="bgImage"
        style={{
          background: `url(${appConfig.assetsUrl}/images/avatars/${profile.avatar}.png) center no-repeat`,
        }}
      >
        {showEdit && (
          <div className="actions">
            <button className="edit__profile" onClick={() => onEdit(profile)}>
              {<PencilIcon />}
            </button>
          </div>
        )}
        {showDone && (
          <div className="actions">
            <button className="edit__profile" onClick={() => onDone(profile)}>
              {<CheckIcon />}
            </button>
          </div>
        )}
      </div>
      {profile.name && <div className="profileName">{profile.name}</div>}
    </div>
  );
};

export default SingleProfie;
