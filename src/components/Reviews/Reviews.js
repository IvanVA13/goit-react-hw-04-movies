import { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Reviews.module.scss';

class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <ul>
        {reviews.length > 0
          ? reviews.map(({ author, content, id }) => (
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

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Reviews;
