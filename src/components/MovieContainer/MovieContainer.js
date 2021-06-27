import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import styles from './MovieContainer.module.scss';
import defaultImg from '../../img/default.jpg';

class MovieContainer extends Component {
  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };
  render() {
    const { poster_path, original_title, vote_average, overview, genres } =
      this.props.movie;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={styles['movie-container']}>
          <div className={styles['movie-image-container']}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original${poster_path}`
                  : defaultImg
              }
              alt={original_title}
            />
          </div>
          <div className={styles['movie-desc-container']}>
            <h1 className={styles['movie-name']}>{original_title}</h1>
            <p className={styles.desc}>User score {vote_average * 10}%</p>
            <h2 className={styles.title}>Overview</h2>
            <p className={styles.desc}>{overview}</p>
            <h2 className={styles.title}>Genres</h2>
            <p className={styles.desc}>
              {genres && genres.map(genre => genre.name).join(' ')}
            </p>
          </div>
        </div>
        <div className={styles['additional-movie-container']}>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${routes.movies}/${this.props.match.params.movieId}/cast`,
                  state: {
                    from: this.props.location,
                  },
                }}
                className={styles['additional-link']}
                activeClassName={styles['additional-link--active']}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${this.props.match.params.movieId}/reviews`,
                  state: {
                    from: this.props.location,
                  },
                }}
                className={styles['additional-link']}
                activeClassName={styles['additional-link--active']}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

MovieContainer.defaultProps = {
  poster_path: '',
};

MovieContainer.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf.isRequired,
  }),
};

export default withRouter(MovieContainer);
