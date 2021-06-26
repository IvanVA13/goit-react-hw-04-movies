import { Component } from 'react';
import api from '../services/api';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    trendMovies: [],
  };

  componentDidMount() {
    api().then(data => this.setState({ trendMovies: data.results }));
  }
  render() {
    return (
      <>
        <h1>Trending today</h1>
        <MovieList movies={this.state.trendMovies} />
      </>
    );
  }
}

export default HomePage;
