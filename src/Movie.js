import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({key, title, rating, poster}){
    return(
        <section className="movie_box">
            <div className="movie_poster">
                <img src={poster} alt={title} />
            </div>
            <div className="movie_info">
                <h3 className="movie_title">{title}</h3>
                <h4 className="movie_rating">{rating}</h4>
            </div>
        </section>
    );
}

Movie.propTypes = {
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;