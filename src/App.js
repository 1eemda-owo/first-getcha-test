import React from "react";
import axios from "axios";

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
    return <div>{isLoading ? "Loading..." : movies.map(movie => {console.log(movie);})}</div>;
  }
}

export default App;