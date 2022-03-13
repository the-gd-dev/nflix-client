import { LOGIN_SUCCESS } from "./action-types";

export function login(credentials) {
    return {
        type: LOGIN_SUCCESS,
        payload: { ...credentials }
    };
}

// function logout() {
//     return { type: LOGOUT };
// }

// function register(user) {
//     return dispatch => {
//     };

// }
