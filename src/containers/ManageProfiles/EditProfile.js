import React, { useEffect, useState } from "react";
import SingleProfie from "../../components/SingleProfie";
import axios from "../../utils/axios";
import { API_POST_PROFILE_UPDATE } from "../../api/profiles";

const EditProfile = ({
  doneBtnHandler,
  editData,
  cancelBtnHandler,
  deleteBtnHandler,
}) => {
  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState('');
  useEffect(() => {
    setName(editData.name);
    setAvatar(editData.avatar);
  }, [editData]);
  const updateProfileData = async () => {
    if (name) {
      const { data } = await axios.post(
        API_POST_PROFILE_UPDATE + "/" + editData._id,
        { name }
      );
      setName(null);
      setAvatar(0);
      doneBtnHandler(data.profile);
    } else {
      setName("");
    }
  };
  return (
    <div>
      <div className="page__container">
        <h1>Edit Profile :</h1>
        <div className="form__edit__profile">
          <SingleProfie profile={{ avatar }} />
          <div className="form__container">
            <form>
              <section className="nf__form__section">
                <div className="nf__form__group">
                  <input
                    type="text"
                    value={name}
                    className={!name ? "is_invalid" : ""}
                    onInput={(e) => setName(e.target.value)}
                  />
                  {!name ? (
                    <label className="is_invalid">Name is required.</label>
                  ) : null}
                </div>
                <div className="nf__form__group">
                  <label htmlFor="">Language :</label>
                  <div>
                    <select name="" id="">
                      <option value="">None</option>
                    </select>
                  </div>
                </div>
              </section>
              <section className="nf__form__section">
                <div className="nf__form__group">
                  <label htmlFor="">Maturity Settings:</label>
                  <div className="maturity__options">
                    <div>Children</div>
                    <div className="ml-4">7+</div>
                  </div>
                  <p>
                    Only show titles rated <b>7+ and below</b> for this profile.
                  </p>
                </div>
              </section>
              <section className="nf__form__section">
                <div className="nf__form__group">
                  <label htmlFor="">Autoplay Controls:</label>
                </div>
                <div className="nf__form__group checkbox">
                  <div>
                    <input type="checkbox" name="" id="auto__play__next__ep" />
                    <label htmlFor="auto__play__next__ep">
                      Autoplay next episode in a series on all devices.
                    </label>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <input type="checkbox" name="" id="auto__play__next__prv" />
                    <label htmlFor="auto__play__next__prv">
                      Autoplay previews while browsing on all devices.
                    </label>
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
      <div className="profile__manager__actions manage__profile__form">
        <div className="manage__profile__action">
          <button className="done__btn" onClick={updateProfileData}>
            <div className="title">Done</div>
          </button>
        </div>
        <div className="manage__profile__action">
          <button className="undone_btn" onClick={cancelBtnHandler}>
            <div className="title">Cancel</div>
          </button>
        </div>
        <div className="manage__profile__action">
          <button
            className="undone_btn delete_btn"
            onClick={() => deleteBtnHandler(editData._id)}
          >
            <div className="title">Delete Profile</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
