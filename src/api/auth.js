import appConfig from "../config/appConfig";
let baseUrl = appConfig.baseURI + "/users";
export const API_LOGIN_USER = `${baseUrl}/login`;
export const API_REGISTER_USER = `${baseUrl}/register`;
export const API_GET_USER = `${baseUrl}`;
export const API_UPDATE_USER = `${baseUrl}/update`;
export const API_VERIFY_CODE = `${baseUrl}/verify-me`;
