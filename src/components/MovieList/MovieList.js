import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';

// import PropTypes from 'prop-types';
// import styles from './MovieList.module.scss';

class MovieList extends Component {
  render() {
    return (
      this.props.movies.length > 0 && (
        <ul>
          {this.props.movies.map(movie => (
            <li key={movie.id}>
              <NavLink
                to={{
                  pathname: `${routes.movies}/${movie.id}`,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )
    );
  }
}

// MovieList.propTypes = {
//   example: PropTypes.string.isRequired,
// };

export default withRouter(MovieList);
