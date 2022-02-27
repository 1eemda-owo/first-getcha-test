import React from "react";
import PropTypes from "prop-types";
import "../Style/Main.css";
import { Link } from "react-router-dom";

function Movie({ title, poster, rating, bg, intro, id }) {
  return (
    <div className="movie_box">
      <div className="movie_poster">
        <Link
          to={{
            pathname: "/home/detail",
            state: { title, poster, rating, bg, intro },
          }}
        >
          <img src={poster} alt={title} />
        </Link>
      </div>
      <div className="movie_info">
        <p className="movie_title">{title}</p>
        <p className="movie_rating">★ {rating}/10</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
};

export default Movie;
