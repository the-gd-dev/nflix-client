import {
  DELETE_TOKEN,
  DELETE_USER,
  SAVE_TOKEN,
  SAVE_USER,
} from "./action-types";

//get user & token from localStorage if available;
let lsToken = localStorage.getItem('auth_token');
let lsUser = JSON.parse(localStorage.getItem('user'));
const initialState = {
  token: lsToken || null,
  user: lsUser || null,
};


/**
 * authentication reducer
 * @param {*} state 
 * @param {*} payload 
 * @returns 
 */
export const authReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case SAVE_TOKEN:
      return { ...state, token: payload.token };
    case DELETE_TOKEN:
      return { ...state, token: null };
    case SAVE_USER:
      return { ...state, user: payload.user };
    case DELETE_USER:
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

