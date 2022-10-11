import React from "react";
import SingleProfie from "../../components/SingleProfie/SingleProfie";
import ActionBtnGroup from "../../components/UI/ActionBtnGroup/ActionBtnGroup";
import ActionBtn from "../../components/UI/ActionBtn/ActionBtn";

const EditProfile = ({ doneBtnHandler, editData, cancelBtnHandler }) => {
  const avtars = [];
  for (let i = 1; i < 17; i++) avtars.push(`256_${i}`);
  return (
    <div>
      <div className="page__container">
        <h2>Update Profile Avatar</h2>
        <div className="form__edit__profile avtars__section">
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
          btnClass={"undone_btn"}
          title={"Cancel"}
          onClickHandler={() => cancelBtnHandler(editData)}
        />
      </ActionBtnGroup>
    </div>
  );
};

export default EditProfile;
