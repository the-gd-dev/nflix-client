const APIKEY = process?.env?.REACT_APP_MDB_SECRET || '';
const baseUri = process?.env?.REACT_APP_MDB_URL || '';

export const MDB_GET_TRENDING = `${baseUri}/trending/all/week?api_key=${APIKEY}&language=en-US`;
export const MDB_GET_TRENDING_TODAY = `${baseUri}/trending/all/day?api_key=${APIKEY}&language=en-US`;
export const MDB_GET_ORIGINALS = `${baseUri}/discover/tv?api_key=${APIKEY}&with_networks=213`;
export const MDB_GET_TOP_RATING = `${baseUri}/movie/top_rated?api_key=${APIKEY}&language=en-US`;
export const MDB_GET_ACTION_MOVIES = `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=28`;
export const MDB_GET_COMEDY_MOVIES = `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=35`;
export const MDB_GET_HORROR_MOVIES = `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=27`;
export const MDB_GET_ROMENTIC_MOVIES = `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=10749`;
export const MDB_GET_DOCUMENTRIES = `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=99`;
export const MDB_STORAGE_URL = "https://image.tmdb.org/t/p/original";

export const fetchRandomMovie = () => {
  return `${baseUri}/movie/${Math.round(
    Math.random() * 1000
  )}?api_key=${APIKEY}`;
};
