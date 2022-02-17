import React from "react";
import PropTypes from "prop-types";

function Movie({title, download_count, like_count, rating, poster}){
    return <p>{title}</p>;
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    download_count: PropTypes.number.isRequired,
    like_count: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;