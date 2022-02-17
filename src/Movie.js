import React from "react";
import PropTypes from "prop-types";

function Movie({title, rating, poster}){
    return(
        <div className="movie_info">
            <img src={poster} alt={title} tile={title} />
            <h3>{title}</h3>
            <h4>{rating}</h4>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired
}

console.Movie();

export default Movie;