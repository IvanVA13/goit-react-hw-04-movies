import { Component } from 'react';
// import PropTypes from 'prop-types';
// import styles from './Reviews.module.scss';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews
          ? this.props.reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            ))
          : 'We don`t have any reviews for this movie'}
      </ul>
    );
  }
}

// Reviews.propTypes = {
//   example: PropTypes.string.isRequired,
// };

export default Reviews;
