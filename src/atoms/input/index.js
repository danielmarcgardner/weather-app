import React, { Component } from 'react';
import { func, string, object } from 'prop-types';
import './input.css';

export class Input extends Component {
  constructor(props){
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      focus: false
    };
  }

  onFocus(){
    this.setState({ focus: true });
  }

  onBlur(){
    this.setState({ focus: false });
  }

  onChange(e) {
    const { setFormState, formKey } = this.props;
    const value = e.target.value;
    const changes = { [formKey] : value };

    return setFormState(changes);
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
  setFormState: () => { console.error('Missing setFormState function!!'); },
  inputState: {}
};

export default Input;
