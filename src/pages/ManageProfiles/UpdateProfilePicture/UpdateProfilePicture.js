import React from "react";
import SingleProfie from "../../../components/SingleProfile/SingleProfile";
import ActionBtnGroup from "../../../components/UI/ActionBtnGroup/ActionBtnGroup";
import ActionBtn from "../../../components/UI/ActionBtn/ActionBtn";
import classses from "./UpdateProfilePicture.module.css";
const EditProfile = ({ doneBtnHandler, editData, cancelBtnHandler }) => {
  const avtars = [];
  for (let i = 1; i < 17; i++) avtars.push(`256_${i}`);
  return (
    <div>
      <div className={classses["page-container"]}>
        <h2>Update Profile Avatar</h2>
        <div className={classses["avtars-section"]}>
          {avtars.map((av) => (
            <SingleProfie
              key={av}
              profile={{ avatar: av }}
              showDone={true}
              onDone={() => doneBtnHandler({ ...editData, avatar: av })}
            />
          ))}
        </div>
      </div>
      <ActionBtnGroup>
        <ActionBtn
          btnClass={classses["undone-btn"]}
          title={"Cancel"}
          onClickHandler={() => cancelBtnHandler(editData)}
        />
      </ActionBtnGroup>
    </div>
  );
};

export default EditProfile;
