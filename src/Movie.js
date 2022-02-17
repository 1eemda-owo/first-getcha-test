import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

function Movie({title, rating, poster}){
    return(
        <div className="movie_list">
            <div className="movie_poster">
                <img src={poster} alt={title} tile={title} />
            </div>
            <h3 className="movie_title">{title}</h3>
            <h4 className="movie_rating">{rating}</h4>
        </div>
    );
}

render() {
    const { isLoading, movies } = this.state;
    return (
        <div>
            {isLoading ? "Loading..." : movies.map((movie) => {
                return (
                    <Movie
                        title={movie.title}
                        rating={movie.rating}
                        poster={movie.small_cover_image}
                    />
                );
            })}
      </div>
    );
}

Movie.propTypes = {
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    download_count: PropTypes.number.isRequired,
    like_count: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired
}

export default Movie;