import { LOGIN_SUCCESS, LOGOUT } from "./action-types";

export const userReducer = (state = null, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload }
        case LOGOUT:
            return { ...state, user: null }
        default:
            return state;
    }
}