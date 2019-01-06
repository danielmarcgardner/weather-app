import React from 'react';
import { func, string, bool } from 'prop-types';
import './button.css';

export const Button = ({ onClick, className, disabled, text, color }) => (
  <div
    onClick={ onClick }
    className={ `button ${className ? className : ''} ${disabled ? 'is-disabled' : ''} is-${color}` }
  >
    {text}
  </div>
);

Button.propTypes = {
  onClick: func,
  className: string,
  disabled: bool,
  text: string,
  color: string
};

Button.defaultProps = {
  onClick: () => console.error('Button is clicked but no onClick!'),
  text: 'Click Me!',
  disabled: false
};

export default Button;
