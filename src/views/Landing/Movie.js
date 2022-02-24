import React from "react";
import { withRouter } from "react-router-dom";
import "../Style/Main.css";

class Movie extends React.Component {
  render() {
    console.log("Movie: ", this.props);
    const { id, title, rating, poster } = this.props;

    return (
      <div
        className="movie_box"
        onClick={() => this.props.history.push(`/home/${id}`)}
      >
        <img src={poster} alt={title} />
        <div className="movie_info">
          <p className="movie_title">{title}</p>
          <p className="movie_rating">★ {rating}/10</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Movie);
