import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './MovieList.module.scss';

import routes from '../../routes';

class MovieList extends Component {
  render() {
    const { movies, location } = this.props;
    return (
      movies.length > 0 && (
        <ListGroup variant="flush" className={'d-inline-block'}>
          {movies.map(({ id, title }, idArr) => {
            const variant = idArr % 2 === 1 ? 'warning' : 'success';
            return (
              <ListGroup.Item variant={variant} key={id}>
                <NavLink
                  to={{
                    pathname: `${routes.movies}/${id}`,
                    state: {
                      from: location,
                    },
                  }}
                  className={styles['movie-list-color']}
                >
                  {title}
                </NavLink>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
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
