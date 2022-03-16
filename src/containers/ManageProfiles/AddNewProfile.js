import React, { useState } from "react";
import appConfig from "../../config/appConfig";
import axios from "../../axios";
import { API_POST_PROFILE_CREATE } from "../../api/profiles";
const AddNewProfile = ({ doneBtnHandler, cancelBtnHandler, showToggle }) => {
  const [name, setName] = useState(null);
  const [isChildren, setIsChildren] = useState(false);
  const createNewProfile = async () => {
    if (name) {
      const { data } = await axios.post(API_POST_PROFILE_CREATE, {
        name,
        isChildren,
      });
      doneBtnHandler(data.profile);
    } else {  setName("");  }
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
                background: `url(${appConfig.assetsUrl}/images/avatars/3.png) center no-repeat`,
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
                <div
                  className="nf__form__group checkbox"
                  style={{ marginTop: 15 }}
                >
                  <input
                    type="checkbox"
                    id="children"
                    value={isChildren}
                    onChange={(e) => setIsChildren(e.target.value)}
                  />
                  <label htmlFor="children">For Children</label>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
      <div className="profile__manager__actions manage__profile__form add__actions">
        <div className="manage__profile__action">
          <button className="done__btn" onClick={createNewProfile}>
            <div className="title">Done</div>
          </button>
        </div>
        <div className="manage__profile__action">
          <button className="undone_btn" onClick={cancelBtnHandler}>
            <div className="title">Cancel</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProfile;
