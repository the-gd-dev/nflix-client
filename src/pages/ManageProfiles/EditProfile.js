import React, { useEffect, useState } from "react";
import SingleProfie from "../../components/SingleProfie/SingleProfie";
import axios from "../../utils/axios";
import { API_POST_PROFILE_TRASH, API_POST_PROFILE_UPDATE } from "../../api/profiles";
import ActionBtnGroup from "../../components/UI/ActionBtnGroup/ActionBtnGroup";
import ActionBtn from "../../components/UI/ActionBtn/ActionBtn";
import { useSelector } from "react-redux";

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
      <div className="page__container">
        <h1>Edit Profile :</h1>
        <div className="form__edit__profile">
          <SingleProfie profile={{ avatar }} showEdit={true} onEdit={updateProfilePic} />
          <div className="form__container">
            <form>
              <section className="nf__form__section">
                <div className="nf__form__group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    value={name}
                    className={!name ? "is_invalid" : ""}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {!name ? <label className="is_invalid">Name is required.</label> : null}
                </div>
              </section>
            </form>
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
