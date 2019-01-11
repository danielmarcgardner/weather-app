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
      zip: '', //Keep track of zip as it's typed
      error: '' //Error during handled submit
    };
  }

  setFormState(val) {
    //This is passed down to the Input component to update the the state in this component.
    this.setState(val);
  }

  handleSubmit(e) {
    //Once the form is submitted this is called
    e && e.preventDefault();
    const { zip } = this.state;
    const { search } = this.props;
    const { multiple, presence, zipCode } = validators;
    const error = multiple([presence(), zipCode()])(zip); //Use the validators and call it with the zip in state. If this returns undefined or null there are no errors
    if (error) {
      return this.setState({ error: `Form error: ${error}` }); //Set state with the error message
    }
    search(zip); //Call the passed in search function
    return this.setState({ error: '', zip: '' }); //Reset the form
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
