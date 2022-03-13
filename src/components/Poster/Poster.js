import React from 'react'
import './Poster.css'
const Poster = ({ base_url, movie, count }) => {
    return (
        <div className="poster__wrap">
            <span className="movie-count">{count}</span>
            <img
                className={``}
                key={movie.id}
                src={`${base_url}/${movie?.poster_path}`}
                alt={movie?.title || movie?.original_title}
            />
        </div>
    );
}

export default Poster;