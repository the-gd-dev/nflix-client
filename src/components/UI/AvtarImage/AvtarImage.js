import React from "react";
import appConfig from "../../../config/appConfig";
import classes from "./AvtarImage.module.css";
const AvtarImage = ({ avatar, height, width }) => {
  return (
    <div
      className={classes.avatarImage}
      style={{
        height,
        width,
      }}
    >
      <img src={`${appConfig.assetsUrl}/images/avatars/${avatar}.png`} alt={avatar} />
    </div>
  );
};

export default AvtarImage;
