import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';
// import styles from './MovieList.module.scss';

class MovieList extends Component {
  render() {
    const { movies, location } = this.props;
    return (
      movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <NavLink
                to={{
                  pathname: `${routes.movies}/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      )
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withRouter(MovieList);
