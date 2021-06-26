import { Component } from 'react';

// import PropTypes from 'prop-types';
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchReq"
          value={searchReq}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

// SearchForm.propTypes = {
//   example: PropTypes.string.isRequired,
// };

export default SearchForm;
