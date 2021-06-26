import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import api from './services/api';
import Navigation from './components/Navigation';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import routes from './routes';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.oneMovie} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
        </Switch>
      </>
    );
  }
}

export default App;
