import { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <Row xs={1} md={2}>
        {reviews.length > 0
          ? reviews.map(({ author, content, id }) => (
              <Col>
                <Card key={id}>
                  <Card.Body>
                    <Card.Title>Author: {author}</Card.Title>
                    <Card.Text>{content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : 'We don`t have any reviews for this movie'}
      </Row>
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
