import { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Cast.module.scss';

class Cast extends Component {
  render() {
    return (
      <ul>
        {this.props.cast &&
          this.props.cast
            .filter(actor => actor.profile_path && actor)
            .map(({ character, name, id, profile_path }) => (
              <li key={id}>
                <div className={styles['img-container']}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    alt={name}
                  />
                </div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
      </ul>
    );
  }
}

// Cast.propTypes = {
//   example: PropTypes.string.isRequired,
// };

export default Cast;
