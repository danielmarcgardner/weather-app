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
    const { setFormState, validator, formKey } = this.props;
    const value = e.target.value;
    const validation = value && typeof validator === Function ? validator(value) : null;

    const changes = { [formKey] : { value, error: validation } };

    return setFormState(changes);
  }

  render() {
    const { focus } = this.state;
    const { placeholder, inputState, className } = this.props;
    const { error, value } = inputState;

    return (
      <div className={ `input ${className ? className : ''}` }>
        <div className={ `input__border  ${focus ? 'is-focused' : ''} ${error ? 'has-error' : ''}` }>
          <input
            onFocus={ this.onFocus }
            onBlur={ this.onBlur }
            placeholder={ placeholder }
            value={ value }
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
  validator: func,
  formKey: string,
  placeholder: string,
  className: string,
  inputState: object
};

Input.defaultProps = {
  setFormState: () => { console.error('Missing setFormState function!!'); },
  inputState: { value: '', error: null }
};

export default Input;
