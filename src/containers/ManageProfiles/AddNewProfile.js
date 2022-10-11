import React, { useState } from "react";
import appConfig from "../../config/appConfig";
import axios from "../../utils/axios";
import { API_POST_PROFILE_CREATE } from "../../api/profiles";
import ActionBtnGroup from "../../components/UI/ActionBtnGroup/ActionBtnGroup";
import ActionBtn from "../../components/UI/ActionBtn/ActionBtn";
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
      <div className="page__container">
        <h1>Add New Profile :</h1>
        <div className="form__edit__profile">
          <div className="profile__wrap">
            <div
              className="bgImage"
              style={{
                background: `url(${appConfig.assetsUrl}/images/avatars/1.png) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="form__container">
            <form>
              <section className="nf__form__section">
                <div className="nf__form__group">
                  <label htmlFor="nf__name">Name</label>
                  <input
                    id="nf__name"
                    type="text"
                    className={name != null && !name ? "is_invalid" : ""}
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                  />
                  {name != null && !name ? (
                    <label className="is_invalid">Name is required.</label>
                  ) : null}
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
      <ActionBtnGroup>
        <ActionBtn
          btnClass="red__btn"
          title={"Done"}
          onClickHandler={createNewProfile}
        />
        <ActionBtn title={"Cancel"} onClickHandler={cancelBtnHandler} />
      </ActionBtnGroup>
    </div>
  );
};

export default AddNewProfile;
