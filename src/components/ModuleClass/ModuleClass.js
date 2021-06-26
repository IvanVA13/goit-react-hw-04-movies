import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModuleClass.module.scss';

class ModuleClass extends Component {
  render() {
    return <div className={styles.example}>{this.props.example}</div>;
  }
}

ModuleClass.propTypes = {
  example: PropTypes.string.isRequired,
};

export default ModuleClass;
