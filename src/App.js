import { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import routes from './routes';
import Loader from './components/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.oneMovie} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
