import React from "react";
import appConfig from "../config/appConfig";
import PencilIcon from "./PencilIcon";

const SingleProfie = ({ profile, showEdit, onEdit }) => {
  return (
    <div className="profile__wrap">
      <div
        className="bgImage"
        style={{
          background: `url(${appConfig.assetsUrl}/images/avatars/${profile.avatar}.png) center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        {showEdit ? (
          <div className="actions">
            <button className="edit__profile" onClick={() => onEdit(profile)}>
              <PencilIcon />
            </button>
          </div>
        ) : null}
      </div>
      <div className="profileName">{profile.name}</div>
    </div>
  );
};

export default SingleProfie;
