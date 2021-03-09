import React from 'react';
import stockImage from '../images/movie.jpg'; 


const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = (props) => {
    const {poster_path , title , overview , vote_average } = props.movie;

    const setVoteClass = (vote) => {
        if(vote >= 8){
            return "green";
        } else if(vote >= 6) {
            return "orange";
        } else {
            return "red";
        }
    }

    return(
        <div className="movie">
            <img 
                src={poster_path ? (IMG_API + poster_path) : stockImage} 
                alt={title}
            />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview : </h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;