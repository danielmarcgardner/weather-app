import React, { Component } from 'react';
import { func, string, object } from 'prop-types';
import './input.css';

//Returns a standard input atom.
export class Input extends Component {
  constructor(props){
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      focus: false //Keep track of focusing state to know when to focus element
    };
  }

  onFocus(){
    //When onfocus is called set state to focused so the input can be focused
    this.setState({ focus: true });
  }

  onBlur(){
    //When user exits out of the input return to unfocused state
    this.setState({ focus: false });
  }

  onChange(e) {
    const { setFormState, formKey } = this.props;
    const value = e.target.value; //Take the value and set the parent form state when there is a change
    const changes = { [formKey] : value };

    return setFormState(changes); //Set parent form state with formKey and value
  }

  render() {
    const { focus } = this.state;
    const { placeholder, inputState, className, formKey, error } = this.props;

    return (
      <div className={ `input ${className ? className : ''}` }>
        <div className={ `input__border  ${focus ? 'is-focused' : ''} ${error ? 'has-error' : ''}` }>
          <input
            onFocus={ this.onFocus }
            onBlur={ this.onBlur }
            placeholder={ placeholder }
            value={ inputState[formKey] }
            className="input__input"
            onChange={ this.onChange }
          />
        </div>
        {/* If there is an error display error */}
        {error && <span className="input__error">{error}</span>}
      </div>
    );
  }
}

Input.propTypes = {
  setFormState: func,
  formKey: string,
  placeholder: string,
  className: string,
  inputState: object,
  error: string
};

Input.defaultProps = {
  //eslint-disable-next-line
  setFormState: () => { console.error('Missing setFormState function!!'); },
  inputState: {}
};

export default Input;
