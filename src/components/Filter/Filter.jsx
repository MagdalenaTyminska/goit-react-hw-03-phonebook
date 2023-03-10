import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string,
    handleSearch: PropTypes.func,
  };
  render() {
    const { filter, handleSearch } = this.props;
    return (
      <>
        <p className={css.filterTitle}>Find contacts by name</p>
        <input
          className={css.filterInput}
          type="text"
          value={filter}
          onChange={handleSearch}
        />
      </>
    );
  }
}
