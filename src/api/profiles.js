import appConfig from "../config/appConfig";
let baseUrl = appConfig.baseURI + "/profiles";

// Format is important for apis other then authentication
// API_{method}_{prefix}

export const API_GET_PROFILES = baseUrl + "/";
export const API_POST_PROFILE_CREATE = baseUrl + "/create";
export const API_POST_PROFILE_UPDATE = baseUrl + "/update";
export const API_POST_PROFILE_TRASH = baseUrl + "/trash";
