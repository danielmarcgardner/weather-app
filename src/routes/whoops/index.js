import React from 'react';
import { Link } from 'react-router-dom';
import './whoops.css';

export const Whoops = () => (
  <div className="whoops">
    <h3 className="whoops__header">Whoops! I don't think you meant to get here</h3>
    <img src="https://media.giphy.com/media/87qWljUiX4Q1y/giphy.gif" alt="bulldog" className="whoops__img my2" />
    <Link to="/" className="whoops__link">Return home</Link>
  </div>
);

export default Whoops;
