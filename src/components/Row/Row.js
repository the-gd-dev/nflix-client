import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/movies";
import Backdrop from "../Backdrop/Backdrop";
import Poster from "../Poster/Poster";
import Loading from "./Loading";
import "./Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchURL, isLargeRow, timeOutValue }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const elementId = title.replace(/\s/g, "_").toLowerCase();
  const [scrollPostion, setScrollPosition] = useState(0);

  //setting banner and poster counts for diffrent screens
  const [loadingSize, setLoadingSize] = useState({ posters: 5, banners: 6 });
  useEffect(() => {
    let windowInnerWidth = window.innerWidth;
    if (windowInnerWidth < 576) {
      setLoadingSize({ posters: 2, banners: 2 });
    } else if (windowInnerWidth > 576 && windowInnerWidth < 650) {
      setLoadingSize({ posters: 3, banners: 3 });
    } else if (windowInnerWidth > 650 && windowInnerWidth < 768) {
      setLoadingSize({ posters: 3, banners: 4 });
    } else if (windowInnerWidth > 768 && windowInnerWidth < 992) {
      setLoadingSize({ posters: 3, banners: 4 });
    } else if (windowInnerWidth > 992 && windowInnerWidth < 1024) {
      setLoadingSize({ posters: 4, banners: 5 });
    } else if (windowInnerWidth > 1024) {
      setLoadingSize({ posters: 5, banners: 6 });
    }
  }, []);
  //setting banner and poster counts for diffrent screens

  useEffect(() => {
    const posterRow = document.getElementById(elementId).scrollLeft;
    setScrollPosition(posterRow);
    async function getMovies() {
      setLoading(true);
      const response = await axiosInstance.get(fetchURL);
      setMovies(response.data.results);
      setLoading(false);
      return response;
    }
    setTimeout(() => getMovies(), timeOutValue);
  }, [fetchURL, elementId, isLargeRow, timeOutValue]);
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
        {!loading && movies.length > 0 ? (
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
          <Loading
            size={isLargeRow ? loadingSize.banners : loadingSize.posters}
            isLarge={isLargeRow}
          />
        )}
      </div>
      {movies.length > 0 && !loading && (
        <div
          id=""
          className={`controls  ${isLargeRow ? "posters" : "thumbnails"}`}
        >
          {scrollPostion > 0 && !loading && (
            <button onClick={scrollLeft} className="left">
              <i className="fa fa-angle-left"></i>
            </button>
          )}
          {!loading && (
            <button onClick={scrollRight} className="right">
              <i className="fa fa-angle-right"></i>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Row;
