import React, { useEffect, useState } from "react";
import { axiosInstance, allRequests as requests } from "../../api/movies";
import RefreshIcon from "../Icons/RefreshIcon";
import "./Banner.css";
function Banner(props) {
  const [movie, setMovie] = useState("");
  const getMovies = async () => {
    const response = await axiosInstance.get(requests.fetchNetflixOriginals);
    const randomNum = Math.round(Math.random() * response.data.results.length);
    setMovie(response.data.results[randomNum]);
  };
  useEffect(() => {
    (async function () {
      await getMovies();
    })();
  }, []);
  const base_url = "https://image.tmdb.org/t/p/original";
  const truncate = (str, n) => (str?.length > n ? `${str.substr(0, n - 1)}...` : str);
  return (
    <header className="App__Header">
      <div
        className="banner"
        style={{ backgroundImage: `url(${base_url}/${movie?.backdrop_path || ""})` }}
      >
        <div className="banner__contents">
          <h1>{movie?.name || movie?.name || movie?.original_name}</h1>
          {/* buttons */}
          <div className="btn-group">
            <button className="btn play">
              <span className="fa fa-play"></span>
              &nbsp;&nbsp;Play
            </button>
            <button className="btn my-list">
              <span className="fa fa-info-circle"></span> &nbsp;More Info
            </button>
          </div>
          {/* description */}
          {movie?.overview && <p>{truncate(movie.overview, 300)}</p>}
        </div>
        <div className="top__row">
          <button className="refreshIcon" onClick={getMovies}>
            <RefreshIcon />
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </header>
  );
}

export default Banner;
