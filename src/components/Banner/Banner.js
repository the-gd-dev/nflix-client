import React, { useEffect, useState } from 'react';
import requests from '../../requests';
import axios from '../../axios';
import './Banner.css'
function Banner(props) {
    const [movie, setMovie] = useState('');
    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(requests.fetchNetflixOriginals)
            const randomNum = Math.round(Math.random() * response.data.results.length);
            setMovie(response.data.results[randomNum]);
            console.log(response);
            return response;
        }
        getMovies();
    }, [])
    const base_url = 'https://image.tmdb.org/t/p/original';
    const truncate = (str, n) => str?.length > n ? `${str.substr(0, n - 1)}...` : str;
    return (

        <header className="banner" style={{ backgroundImage: `url(${base_url}/${movie.backdrop_path})` }}>
            <div className="banner__contents">
                <h1>{movie?.name || movie?.name || movie?.original_name}</h1>
                {/* buttons */}
                <div className="btn-group">
                    <button className="btn play">Play</button>
                    <button className="btn my-list">My List</button>
                </div>
                {/* description */}
                <p>
                    {truncate(movie.overview, 400) }
                </p>
            </div>

        </header>
    );
}

export default Banner;