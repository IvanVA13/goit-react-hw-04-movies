import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Cast.module.scss';
import defaultImg from '../../img/default.jpg';

class Cast extends Component {
  render() {
    const { cast } = this.props;
    return (
      <ul>
        {cast.length > 0
          ? cast.map(({ character, name, id, profile_path }) => (
              <li key={id}>
                <div className={styles['img-container']}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : defaultImg
                    }
                    alt={name}
                  />
                </div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))
          : 'We don`t have any cast for this movie'}
      </ul>
    );
  }
}

Cast.defaultProps = {
  character: '',
  profile_path: '',
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
    }),
  ).isRequired,
};

export default Cast;
