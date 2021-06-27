import { Component } from 'react';
import Container from 'react-bootstrap/Container';

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
      <Container className="d-inline-block">
        <h1>Trending today</h1>
        <MovieList movies={this.state.trendMovies} />
      </Container>
    );
  }
}

export default HomePage;
