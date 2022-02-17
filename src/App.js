import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import { Title } from "@material-ui/icons";

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
      <section className="Box">
        {isLoading ? 
        (
          <div className="loader">
            <span className="loader_text"> Loading... </span>
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
                  poster={movie.small_cover_image}
                />
              );
            })}
            ;
          </div>
        )}
      </section>
    );
  }
}

export default App;