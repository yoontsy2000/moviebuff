import React from 'react';
import './Movie.css';

function Movie(props) {

    return (
        <div class="container">
            <div class="Poster">
                <img
                    src={"https://image.tmdb.org/t/p/w342/" + props.poster_path}
                    alt=""
                />
            </div>
            {/* <div class="Title">
                <h1>{props.title}</h1>
            </div>
            <div class="Overview">
                <p>{props.release_date}</p>
                <p>{props.overview}</p>
            </div> */}
        </div>
    )
}

export default Movie;