import React from 'react'
import './Backdrop.css'
const Backdrop = ({ base_url, movie }) => {
    const truncate = (str, n) => str?.length > n ? `${str.substr(0, n - 1)}...` : str;
    const backdrop = movie?.backdrop_path || movie?.poster_path || '';
    return (
        <div className={`poster__wrap`}>
            <img
                key={movie.id}
                src={`${base_url}/${backdrop}`}
                alt={movie?.title || movie?.original_title}
            />
            <div className="movie-info">
                <h3>
                    {truncate((movie?.name || movie?.title || movie?.original_title), 50)}
                </h3>
                <p>
                    {truncate(movie.overview, 150)}
                </p>
            </div>
        </div>
    );
}

export default Backdrop;