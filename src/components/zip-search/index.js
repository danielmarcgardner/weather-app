import React, { Component } from 'react';
import { func } from 'prop-types';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { validators } from '../../utils/form-helpers';
import './zip-search.css';

export class ZipSearch extends Component {
  constructor(props) {
    super(props);
    this.setFormState = this.setFormState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      zip: '',
      error: ''
    };
  }

  setFormState(val) {
    this.setState(val);
  }

  handleSubmit(e) {
    e && e.preventDefault();
    const { zip } = this.state;
    const { search } = this.props;
    const { multiple, presence, zipCode } = validators;
    const error = multiple([presence(), zipCode()])(zip);
    if (error) {
      return this.setState({ error: `Form error: ${error}` });
    }
    this.setState({ error: '' });
    return search(zip);
  }

  render() {
    const { error } = this.state;
    return (
      <form className="zip-search" onSubmit={ this.handleSubmit }>
        <Input
          className="zip-search__input"
          setFormState={ this.setFormState }
          placeholder="Enter Zipcode"
          inputState={ this.state }
          formKey="zip"
          error={ error }
        />
        <Button
          className="zip-search__button ml2"
          onClick={ this.handleSubmit }
          color="blue"
          text="Search"
        />
      </form>
    );
  }
}

ZipSearch.propTypes = {
  search: func
};

export default ZipSearch;
