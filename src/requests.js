const APIKEY = process.env.REACT_APP_MDB_SECRET;
const baseUri = process.env.REACT_APP_MDB_URL;
const requests = {
  fetchTrending: `${baseUri}/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchTrendingToday: `${baseUri}/trending/all/day?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `${baseUri}/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `${baseUri}/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanticMovies: `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `${baseUri}/discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchRandomMovie() {
    return `${baseUri}/movie/${Math.round(Math.random() * 1000)}?api_key=${APIKEY}`;
  },
};
export default requests;
