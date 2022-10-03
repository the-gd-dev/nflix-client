import store from "..";
import { API_GET_USER } from "../../api/auth";
import axios from "../../utils/axios";
const {
  SAVE_TOKEN,
  SAVE_USER,
  DELETE_USER,
  DELETE_TOKEN,
} = require("./action-types");

/**
 * save jwt token
 * @param {*} token
 * @returns
 */
export const saveAuthToken = (token) => {
  localStorage.setItem("auth_token", token);
  return {
    type: SAVE_TOKEN,
    token,
  };
};

/**
 * delete jwt token
 * @returns
 */
export const removeToken = () => {
  localStorage.removeItem("auth_token");
  return {
    type: DELETE_TOKEN,
  };
};

/**
 * save jwt user
 * @param {*} token
 * @returns
 */
export const saveAuthUser = (userData) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      ...userData,
      current_watching:
        JSON.parse(localStorage.getItem("currently_watching")) ||
        userData.profiles[0],
    })
  );
  return {
    type: SAVE_USER,
    user: {
      ...userData,
      current_watching:
        JSON.parse(localStorage.getItem("currently_watching")) ||
        userData.profiles[0],
    },
  };
};

/**
 * delete jwt user
 * @returns
 */
export const removeAuthUser = () => {
  localStorage.removeItem("user");
  return {
    type: DELETE_USER,
  };
};

/**
 * fetch jwt user
 * @returns
 */
export const updateCurrentWatching = (data) => {
  return async (dispatch) => {
    try {
      const storeState = store.getState();
      const savedUser = storeState.auth.user;
      if (data?.current_watching && localStorage.getItem("currently_watching")) {
        localStorage.setItem("currently_watching", JSON.stringify(data.current_watching));
        dispatch(saveAuthUser({ ...savedUser, current_watching: data.current_watching }));
      } else {
        localStorage.setItem(
          "currently_watching",
          JSON.stringify(savedUser.profiles[0])
        );
        dispatch(
          saveAuthUser({
            ...savedUser,
            current_watching: savedUser.profiles[0],
          })
        );
      }
      // const { data } = await axios.post(API_UPDATE_USER, profile);
    } catch (error) {
      // dispatch(removeToken());
      // dispatch(removeAuthUser());
    }
  };
};

/**
 * fetch jwt user
 * @returns
 */
export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(API_GET_USER);
      dispatch(saveAuthUser(data.user));
    } catch (error) {
      const { status } = error?.response;
      if (status === 401 || status === 403) {
        dispatch(removeToken());
        dispatch(removeAuthUser());
      }
    }
  };
};
