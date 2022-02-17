import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    apiUrl:
      "https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=15&order_by=desc",
    inLoading: true,
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
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : this.renderMovie()};</div>;
  }

  renderMovie() {
    return(
    return this.state.movies.map((movie)=> {
      return (
        <Movie
          key={movie.id}
          title={movie.title}
          download_count={movie.download_count}
          like_count={movie.like_count}
          rating={movie.rating}
          poster={movie.small_cover_image}
          intro={movie.description_full}
        />
      );
    })
    )
  }
}

export default App;
