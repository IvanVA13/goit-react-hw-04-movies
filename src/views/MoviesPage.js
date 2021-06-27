import { Component } from 'react';
import queryString from 'query-string';
import { Route } from 'react-router-dom';

import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import api from '../services/api';
import routes from '../routes';

class MoviesPage extends Component {
  state = {
    searchReq: '',
    movies: [],
  };

  componentDidMount() {
    const objQuery = queryString.parse(this.props.history.location.search);
    objQuery.query && this.setState({ searchReq: objQuery.query });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchReq !== this.state.searchReq) {
      this.getMoviesByQuery(this.state.searchReq);
      this.props.history.push({
        search: `?query=${this.state.searchReq}`,
      });
    }
  }

  getMoviesByQuery = query => {
    api('search/movie', { query }).then(data =>
      this.setState({ movies: data.results }),
    );
  };

  submitHandler = searchReq => {
    this.setState({ searchReq });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.submitHandler} />
        <Route
          path={routes.movies}
          render={props => {
            return <MovieList movies={this.state.movies} />;
          }}
        />
      </>
    );
  }
}

export default MoviesPage;
