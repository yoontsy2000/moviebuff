import React from 'react';
import './Movie.css';

function Movie(props) {
    return (
        <div className="container">
            <div className="Poster">
                <img
                    src={"https://image.tmdb.org/t/p/w342/" + props.poster_path}
                    alt={props.title}
                />
            </div>
            <div className="Title">
                <h1>{props.title}</h1>
            </div>
            <div className="Overview">
                <p>{props.release_date}</p>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}

export default Movie;