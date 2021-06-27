import { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieContainer from '../components/MovieContainer';
import routes from '../routes';
import api from '../services/api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    movie: {
      original_title: '',
      vote_average: 0,
      overview: '',
      genres: [],
      credits: {},
      reviews: {},
    },
  };

  componentDidMount() {
    const typeReq = `movie/${this.props.match.params.movieId}`;
    const options = { append_to_response: 'credits,reviews' };
    api(typeReq, options).then(data => this.setState({ movie: { ...data } }));
  }
  render() {
    const { movie } = this.state;
    const { credits, reviews } = this.state.movie;
    const { movieId } = this.props.match.params;
    return (
      <>
        <MovieContainer movie={movie} />
        <Route
          path={`${routes.movies}/${movieId}/cast`}
          render={() => {
            return <Cast cast={credits?.cast || []} />;
          }}
        />
        <Route
          path={`${routes.movies}/${movieId}/reviews`}
          render={() => {
            return (
              <Reviews
                reviews={reviews?.results?.length > 0 ? reviews.results : []}
              />
            );
          }}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
