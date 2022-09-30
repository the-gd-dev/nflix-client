// eslint-disable-next-line import/no-anonymous-default-export
export default {
  assetsUrl: process?.env?.REACT_APP_API_ASSET_URL || 'http://localhost:8080/static',
  baseURI: process?.env?.REACT_APP_API_BASE_URL || 'http://localhost:8080',
};
