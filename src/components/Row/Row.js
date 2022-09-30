import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/movies";
import Backdrop from "../Backdrop/Backdrop";
import Poster from "../Poster/Poster";
import Loading from "./Loading";
import "./Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const elementId = title.replace(/\s/g, "_").toLowerCase();
  const [scrollPostion, setScrollPosition] = useState(0);
  useEffect(() => {
    const posterRow = document.getElementById(elementId).scrollLeft;
    setScrollPosition(posterRow);
    async function getMovies() {
      setLoading(false);
      const response = await axiosInstance.get(fetchURL);
      setMovies(response.data.results);
      setLoading(true);
      return response;
    }
    if (!isLargeRow) {
      setTimeout(() => {
        getMovies();
      }, 4000);
    } else {
      setTimeout(() => {
        getMovies();
      }, 4000);
      // getMovies();
    }
  }, [fetchURL, elementId, isLargeRow]);
  const scrollLeft = (e) => {
    scrollPostion < 0
      ? setScrollPosition(0)
      : setScrollPosition((prev) => (prev -= 300));
    document.getElementById(elementId).scrollLeft -= 300;
    e.preventDefault();
  };
  const scrollRight = (e) => {
    setScrollPosition((prev) => (prev += 300));
    document.getElementById(elementId).scrollLeft += 300;
    e.preventDefault();
  };
  return (
    <div className="row">
      <h2>{title} </h2>
      <div
        id={elementId}
        className={`row__posters  ${isLargeRow ? "posters" : "thumbnails"}`}
      >
        {loading && movies.length > 0 ? (
          movies.map((m, key) =>
            isLargeRow ? (
              key < 10 ? (
                <Poster base_url={baseUrl} movie={m} count={++key} key={key} />
              ) : null
            ) : (
              <Backdrop base_url={baseUrl} movie={m} key={key} />
            )
          )
        ) : (
          <Loading size={10} isLarge={isLargeRow} />
        )}
      </div>
      {movies.length > 0 ? (
        <div
          id=""
          className={`controls  ${isLargeRow ? "posters" : "thumbnails"}`}
        >
          {scrollPostion > 0 ? (
            <button onClick={scrollLeft} className="left">
              {" "}
              <i className="fa fa-angle-left"></i>
            </button>
          ) : null}
          <button onClick={scrollRight} className="right">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Row;
