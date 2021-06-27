import { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import defaultImg from '../../img/default.jpg';

class Cast extends Component {
  render() {
    const { cast } = this.props;
    return (
      <Row xs={1} md={4} lg={5}>
        {cast.length > 0
          ? cast.map(({ character, name, id, profile_path }) => (
              <Col>
                <Card key={id}>
                  <Card.Img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : defaultImg
                    }
                    alt={name}
                  />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Character: {character}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : 'We don`t have any cast for this movie'}
      </Row>
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
