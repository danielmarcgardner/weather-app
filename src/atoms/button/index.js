import React from 'react';
import { func, string, bool } from 'prop-types';
import './button.css';

//Returns a standard button atom.
export const Button = ({ onClick, className, disabled, text, color }) => (
  <button
    onClick={ onClick ? onClick : null }
    className={ `button ${className ? className : ''} ${disabled ? 'is-disabled' : ''} is-${color}` }
    tabIndex="0"
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: func,
  className: string,
  disabled: bool,
  text: string,
  color: string
};

Button.defaultProps = {
  text: 'Click Me!',
  disabled: false
};

export default Button;
