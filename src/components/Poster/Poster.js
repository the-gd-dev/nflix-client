import React from "react";
import classes from "./Poster.module.css";

const Poster = ({ base_url, movie, count }) => {
  return (
    <div className={classes.posterWrap}>
      <span className={classes.movieCount}>{count}</span>
      <div
         className={classes.posterBg}
        style={{
          backgroundImage: `url(${base_url}/${movie?.poster_path})`
        }}
      ></div>
      {/* <img
                className={``}
                key={movie.id}
                src={`${base_url}/${movie?.poster_path}`}
                alt={movie?.title || movie?.original_title}
            /> */}
    </div>
  );
};

export default Poster;
