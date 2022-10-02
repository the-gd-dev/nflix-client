import React, { useEffect, useState } from "react";
import SingleProfie from "../../components/SingleProfie";
import axios from "../../utils/axios";
import { API_POST_PROFILE_UPDATE } from "../../api/profiles";
import ActionBtnGroup from "../../components/ActionBtnGroup/ActionBtnGroup";
import ActionBtn from "../../components/ActionBtn/ActionBtn";

const EditProfile = ({
  doneBtnHandler,
  editData,
  cancelBtnHandler,
}) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    setName(editData.name);
    setAvatar(editData.avatar);
  }, [editData]);
  const updateProfileData = async (av) => {
    
  };
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
              onDone={() => doneBtnHandler({...editData, avatar : av})}
            />
          ))}
        </div>
      </div>
      <ActionBtnGroup>
        <ActionBtn 
            btnClass={'undone_btn'}
            title={'Cancel'}
            onClickHandler={() => cancelBtnHandler(editData)}
        />
      </ActionBtnGroup>
      
    </div>
  );
};

export default EditProfile;
