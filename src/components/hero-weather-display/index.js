import React from 'react';
import moment from 'moment';
import { string, object, func } from 'prop-types';
import './hero-weather-display.css';

//Returns all of the information about an available day in the five day forecast
export const HeroWeatherDisplay = ({ date, day, astro, close }) => (
  <div className="hero">
    <div className="hero__header">
      <h4>Date: {moment(date).format('MMMM Do YYYY')}</h4>
      <img src={ `http:${day.condition.icon}` } alt={ day.condition.text } />
    </div>
    <h5 className="my1">{day.condition.text}</h5>
    <div className="hero__moredata">
      <div className="hero__moredata--item">
        <h5>Astro:</h5>
        <ul>
          {/* Astro keys were easily deciphered as to what they were to the human eye so I mapped through them.
            The rest of the keys were not as easy to read to the human eye or included non standard measurements */}
          {Object.keys(astro).map((sign, index) => <li key={ `astro-${index}` } className="hero__list--li">{`${sign.charAt(0).toUpperCase() + sign.slice(1)}: ${astro[sign]}`}</li>)}
        </ul>
      </div>
      <div className="hero__moredata--item">
        <h5>Temp:</h5>
        <ul>
          <li className="hero__list--li">Humidity: {day.avghumidity}%</li>
          <li className="hero__list--li">Max Temp: {day.maxtemp_f}&#8457;</li>
          <li className="hero__list--li">Avgerage Temp: {day.avgtemp_f}&#8457;</li>
          <li className="hero__list--li">Low Temp: {day.mintemp_f}&#8457;</li>
        </ul>
      </div>
      <div className="hero__moredata--item">
        <h5>Misc:</h5>
        <ul>
          <li className="hero__list--li">Visibility: {day.avgvis_miles} Miles</li>
          <li className="hero__list--li">Max Wind Speed: {day.maxwind_mph} MPH</li>
          <li className="hero__list--li">Total Percipitation: {day.totalprecip_in} Inches</li>
          <li className="hero__list--li">UV: {day.uv} Inches</li>
        </ul>
      </div>
    </div>
    <span className="hero__close typ--line" onClick={ close }>Close</span>
  </div>
);

HeroWeatherDisplay.propTypes = {
  date: string,
  day: object,
  astro: object,
  close: func
};

export default HeroWeatherDisplay;
