import React, { useState } from "react";
import appConfig from "../../../config/appConfig";
import axios from "../../../utils/axios";
import { API_POST_PROFILE_CREATE } from "../../../api/profiles";
import ActionBtnGroup from "../../../components/UI/ActionBtnGroup/ActionBtnGroup";
import ActionBtn from "../../../components/UI/ActionBtn/ActionBtn";
import ManageForm from "../ManageForm/ManageForm";
import SingleProfile from "../../../components/SingleProfile/SingleProfile";
import classes from './AddNewProfile.module.css'
const AddNewProfile = ({ doneBtnHandler, cancelBtnHandler, showToggle }) => {
  const [name, setName] = useState("");
  const createNewProfile = async () => {
    if (name) {
      const { data } = await axios.post(API_POST_PROFILE_CREATE, {
        name,
      });
      doneBtnHandler(data.profile);
    } else {
      setName("");
    }
  };

  return (
    <div>
      <div className={classes['page-container']}>
        <h1>Add New Profile :</h1>
        <div className={classes['edit-profile-form']}>
          <SingleProfile profile={{ avatar: 1 }} />
          <div className={classes['form-container']}>
            <ManageForm nameValue={name} updateValue={(v) => setName(v)} />
          </div>
        </div>
      </div>
      <ActionBtnGroup>
        <ActionBtn btnClass="red__btn" title={"Done"} onClickHandler={createNewProfile} />
        <ActionBtn title={"Cancel"} onClickHandler={cancelBtnHandler} />
      </ActionBtnGroup>
    </div>
  );
};

export default AddNewProfile;
