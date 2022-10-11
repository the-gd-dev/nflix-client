import React, { useEffect, useState } from "react";
import SingleProfie from "../../../components/SingleProfile/SingleProfile";
import axios from "../../../utils/axios";
import { API_POST_PROFILE_TRASH, API_POST_PROFILE_UPDATE } from "../../../api/profiles";
import ActionBtnGroup from "../../../components/UI/ActionBtnGroup/ActionBtnGroup";
import ActionBtn from "../../../components/UI/ActionBtn/ActionBtn";
import { useSelector } from "react-redux";
import ManageForm from "../ManageForm/ManageForm";
import classes from "./EditProfile.module.css";
const EditProfile = ({
  doneBtnHandler,
  editData,
  cancelBtnHandler,
  deleteBtnHandler,
  updateProfilePic,
}) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (editData.name) setName(editData.name);
    if (editData.avatar) setAvatar(editData.avatar);
  }, [editData]);
  const user = useSelector((state) => state.auth.user);
  const updateProfileData = async () => {
    const { data } = await axios.post(API_POST_PROFILE_UPDATE + "/" + editData._id, {
      ...editData,
      name: name ? name : editData.name,
    });
    setName("");
    setAvatar(0);
    doneBtnHandler(data.profile);
  };
  const onDelete = async (profileId) => {
    if (window.confirm("Are you sure ?")) {
      await axios.post(API_POST_PROFILE_TRASH + "/" + editData._id);
      deleteBtnHandler(editData._id);
    }
  };
  return (
    <div>
      <div className={classes["page-container"]}>
        <h1>Edit Profile :</h1>
        <div className={classes["edit-profile-form"]}>
          <SingleProfie profile={{ avatar }} showEdit={true} onEdit={updateProfilePic} />
          <div className={classes["form-container"]}>
            <ManageForm nameValue={name} updateValue={(v) => setName(v)} />
          </div>
        </div>
      </div>
      <ActionBtnGroup>
        <ActionBtn btnClass="red__btn" title={"Done"} onClickHandler={updateProfileData} />
        <ActionBtn title={"Cancel"} onClickHandler={cancelBtnHandler} />
        {user.current_watching._id !== editData._id && (
          <ActionBtn title={"Delete"} onClickHandler={() => onDelete(editData._id)} />
        )}
      </ActionBtnGroup>
    </div>
  );
};

export default EditProfile;
