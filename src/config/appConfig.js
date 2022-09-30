// eslint-disable-next-line import/no-anonymous-default-export
export default {
  mdbSecret: process?.env?.REACT_APP_MDB_SECRET || '',
  assetsUrl: process?.env?.REACT_APP_API_ASSET_URL || '',
  baseURI: process?.env?.REACT_APP_API_BASE_URL || '',
  mdbURI: process?.env?.REACT_APP_MDB_URL || '' ,
};
