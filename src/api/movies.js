import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: process?.env?.REACT_APP_MDB_URL || "https://api.themoviedb.org/3",
  params: {
    api_key:
      process?.env?.REACT_APP_MDB_SECRET || "30e4036cb53c7c547831db8e6c1dc4e6",
  },
});
export const allRequests = {
  fetchTrending: `/trending/all/week?language=en-US`,
  fetchTrendingToday: `/trending/all/day?language=en-US`,
  fetchNetflixOriginals: `/discover/tv?with_networks=213`,
  fetchTopRated: `/movie/top_rated?language=en-US`,
  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchHorrorMovies: `/discover/movie?with_genres=27`,
  fetchRomanticMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,
  fetchRandomMovie() {
    return `/movie/${Math.round(Math.random() * 1000)}`;
  },
};
