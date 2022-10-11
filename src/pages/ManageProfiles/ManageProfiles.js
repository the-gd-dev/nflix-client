import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppLayout from "../../components/AppLayout/AppLayout";
import AddNewProfile from "./AddNewProfile/AddNewProfile";
import axios from "../../utils/axios";
import { API_GET_PROFILES } from "../../api/profiles";
import SingleProfie from "../../components/SingleProfile/SingleProfile";
import EditProfile from "./EditProfile/EditProfile";
import UpdateProfilePicture from "./UpdateProfilePicture/UpdateProfilePicture";
import CogIcon from "../../components/Icons/CogIcon";
import { updateCurrentWatching } from "../../store/auth/actions";
import LeftArrow from "../../components/Icons/LeftArrow";
import ActionBtnGroup from "../../components/UI/ActionBtnGroup/ActionBtnGroup";
import ActionBtn from "../../components/UI/ActionBtn/ActionBtn";
import CloseIcon from "../../components/Icons/CloseIcon";
import classes from "./ManageProfiles.module.css";
import AddNewButton from "./AddNewButton/AddNewButton";
const ManageProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [editProfileData, setEditProfileData] = useState({});
  const [currentSection, setCurrentSection] = useState(1);
  const [manageProfile, setManageProfile] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    const getProfiles = async () => {
      const { data } = await axios.get(API_GET_PROFILES);
      setProfiles(data.profiles);
    };
   
    getProfiles();
  }, []);
  const editProfileHandler = (profile) => {
    setEditProfileData(profile);
    setCurrentSection(2);
  };

  const updateProfileHandler = async (profile) => {
    if (profile._id === user.current_watching._id) {
      dispatch(updateCurrentWatching({ current_watching: profile }));
    }
    const updatedProfiles = profiles.map((p) => {
      if (p._id === profile._id) return profile;
      return p;
    });
    setProfiles(updatedProfiles);
    setManageProfile(false);
    setCurrentSection(1);
  };
  const discardHandler = (type) => {
    setManageProfile(false);
    if (type === "edit") {
      setCurrentSection(1);
    }
    if (type === "add") {
      setCurrentSection(1);
    }
  };
  const goBackToBrowse = () => {
    history.push("/browse");
  };
  const updateDpHandler = () => {
    setCurrentSection(4);
  };
  const trashProfileHandler = (profileId) => {
    const updatedProfiles = profiles.filter((p) => p._id !== profileId);
    setProfiles(updatedProfiles);
    setCurrentSection(1);
  };
  const createDoneBtnHandler = async (profile) => {
    setProfiles((prevState) => [...prevState, profile]);
    setCurrentSection(1);
  };
  const displayPictureSetHandler = async (profile) => {
    setEditProfileData(profile);
    setCurrentSection(2);
  };
  const changeCurrentWatching = async (profile) => {
    dispatch(updateCurrentWatching({ current_watching: profile }));
    goBackToBrowse();
  };
  return (
    <AppLayout customClasses={["select__profiles"]}>
      <div className={classes["page-container"]}>
        {/* Show Who's Watching */}
        <div
          className={`${classes["manage-profiles-wrapper"]} ${classes["fetched-profile"]} ${
            currentSection === 1 ? classes.show : ""
          }`}
        >
          <h1>Who's Watching ?</h1>
          <div className={classes["profiles-container"]}>
            {profiles.map((prof) => (
              <SingleProfie
                profile={prof}
                key={prof._id}
                showEdit={manageProfile}
                onEdit={() => {}}
                activeProfile={prof._id === user.current_watching._id}
                onAvatarClick={(v) =>
                  manageProfile ? editProfileHandler(v) : changeCurrentWatching(prof)
                }
              />
            ))}
            {profiles.length < 4 && <AddNewButton onAddClick={() => setCurrentSection(3)} />}
          </div>
          <ActionBtnGroup>
            {!manageProfile ? (
              <ActionBtn
                btnClass={classes["manage-btn"]}
                icon={<CogIcon />}
                title={"Manage Profiles"}
                onClickHandler={() => setManageProfile(!manageProfile)}
              />
            ) : (
              <ActionBtn
                icon={<CloseIcon />}
                btnClass={classes["manage-btn"]}
                title={"Cancel"}
                onClickHandler={() => setManageProfile(!manageProfile)}
              />
            )}
            {!manageProfile && (
              <ActionBtn
                btnClass={classes["manage-btn"]}
                icon={<LeftArrow />}
                title={"Back"}
                onClickHandler={goBackToBrowse}
              />
            )}
          </ActionBtnGroup>
        </div>
        {/* Show Edit Profile */}
        <div
          className={`${classes["manage-profiles-wrapper"]} ${
            currentSection === 2 ? classes.show : ""
          }`}
        >
          <EditProfile
            showToggle={currentSection === 2}
            editData={editProfileData}
            doneBtnHandler={(v) => updateProfileHandler(v)}
            cancelBtnHandler={() => discardHandler("edit")}
            deleteBtnHandler={(v) => trashProfileHandler(v)}
            updateProfilePic={updateDpHandler}
          />
        </div>
        {/* Show Add New Profile */}
        <div
          className={`${classes["manage-profiles-wrapper"]} ${
            currentSection === 3 ? classes.show : ""
          }`}
        >
          <AddNewProfile
            showToggle={currentSection === 3}
            doneBtnHandler={(v) => createDoneBtnHandler(v)}
            cancelBtnHandler={() => discardHandler("add")}
          />
        </div>
        {/* Show Update Display Picture */}
        <div
          className={`${classes["manage-profiles-wrapper"]} ${
            currentSection === 4 ? classes.show : ""
          }`}
        >
          <UpdateProfilePicture
            showToggle={currentSection === 4}
            editData={editProfileData}
            doneBtnHandler={(v) => displayPictureSetHandler(v)}
            cancelBtnHandler={(v) => displayPictureSetHandler(v)}
          />
        </div>
      </div>
    </AppLayout>
  );
};
export default React.memo(ManageProfiles);
