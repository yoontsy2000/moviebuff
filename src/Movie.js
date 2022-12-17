import React from 'react';
import './Movie.css';

function Movie(props) {

    return (
        <div class="container">
            <div class="Poster">
                <img 
                    src={"https://image.tmdb.org/t/p/w500/" + props.poster_path}
                    alt=""
                />
            </div>
            <div class="Title">
                <p>{props.title}</p>
            </div>
            <div class="Overview">
                <p>{props.release_date}</p>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}

export default Movie;