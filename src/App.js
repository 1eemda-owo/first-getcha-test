import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    apiUrl: "https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=15&order_by=desc",
    isLoading: true,
    movies: [],
  };

  getMovies = async() => {
    const {data : {data : {movies}}} = await axios.get(this.state.apiUrl);
    this.setState({movies, isLoading: false});
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
          <div className="movies_info">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;