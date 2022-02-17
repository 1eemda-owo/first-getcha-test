import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state={
    movies:[]
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.xml?sort=seeds&limit=15");
    this.setState({movies});
  }

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { movies } = this.state;
    return (
      <section className="box">
        <div className="movie">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                download_count={movie.download_count}
                like_count={movie.like_count}
                rating={movie.rating}
                poster={movie.small_cover_image}
              />
            );
          })}
        </div>
      </section>
    )
  }
}

export default App;
