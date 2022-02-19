import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./Loading.css";
import "./Page.css";

class LandingPage extends React.Component {
    state = {
      apiUrl: "https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=15",
      isLoading: true,
      movies: [],
    };
  
    getMovies = async () => {
      const {data:{data:{movies}}} = await axios.get(this.state.apiUrl);
      this.setState({ movies, isLoading: false });
    }
  
    componentDidMount() {
      this.getMovies();
    }
  
    render() {
      const { isLoading, movies } = this.state;
      return (
        <section className="contents">
          {isLoading ? 
          (
            <div className="loader_main">
              <div className="loader loader_ani"></div>
              <apan className="loader loader_text">Loading...</apan>
            </div> 
          ) : 
          (
            movies.map((movie) => {
              return (
                <Movie
                  id={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  poster={movie.medium_cover_image}
                  download_count={movie.download_count}
                  like_count={movie.like_count}
                  intro={movie.description_intro}
                />
              );
            })
          )}
        </section>
      );
    }
  }

function Movie({title, rating, poster}){
    return(
        <section className="movie_box">
            <div className="movie_poster">
                <img src={poster} alt={title} />
            </div>
            <div className="movie_info">
                <p className="movie_title">{title}</p>
                <p className="movie_rating">{rating}/10</p>
            </div>
        </section>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
}

export default LandingPage;