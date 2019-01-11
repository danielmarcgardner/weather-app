import React from 'react';
import { Link } from 'react-router-dom';
import './whoops.css';

//A simple catch all whoops component in case if the user tries to navigate a place they didn't mean to
export const Whoops = () => (
  <div className="whoops">
    <h3 className="whoops__header">Whoops! I don't think you meant to get here</h3>
    {/* I have an English Bulldog so I thought appropriate to put thus funny bulldog gif in here for lost users */}
    <img src="https://media.giphy.com/media/87qWljUiX4Q1y/giphy.gif" alt="bulldog" className="whoops__img my2" />
    <Link to="/" className="whoops__link">Return home</Link>
  </div>
);

export default Whoops;
