import { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import styles from './SearchForm.module.scss';

class SearchForm extends Component {
  state = {
    searchReq: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchReq);

    this.reset();
  };

  reset = () => {
    this.setState({ searchReq: '' });
  };

  render() {
    const { searchReq } = this.state;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Form.Control
          type="text"
          name="searchReq"
          value={searchReq}
          onChange={this.handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
