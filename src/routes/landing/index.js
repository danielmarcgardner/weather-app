import React from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
import { getWeatherByZipCode, removeZip } from '../../redux/actions/weatherActions';
import ZipSearch from '../../components/zip-search';
import ZipCard from '../../components/zip-card';
import './landing.css';

//The landiung page and first page the user will generall see
export const Landing = ({ getWeatherByZipCode, weather, removeZip }) => (
  <div className="landing">
    <div className="landing__welcome mb1">
      <h3 className="mb2">Welcome!</h3>
      {/* App instructions and thanks to the API */}
      <p>Welcome to Daniel's weather app. All weather data is provided by <a target="_blank" rel="noopener noreferrer" href="https://www.apixu.com/">Apixu</a>. Users can search by zip for their desired location. Users can search for multiple locations and add them to the list below. By clicking a list item below the user can get a five day forcast with more specific information.</p>
    </div>
    <div className="landing__search mb2">
      <ZipSearch search={ getWeatherByZipCode } />
    </div>
    <div className="landing__results">
      {/* Display all weather in state that the user has searched for */}
      {weather.length > 0 && weather.map(weather => <ZipCard { ...weather } remove={ removeZip } key={ `weather-${weather.zip}` } />)}
    </div>
  </div>
);

export const mapStateToProps = state => ({
  weather: state.weather.weatherZips
});

const mapDispatchToProps = {
  getWeatherByZipCode,
  removeZip
};

Landing.propTypes = {
  getWeatherByZipCode: func,
  weather: array,
  removeZip: func
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
