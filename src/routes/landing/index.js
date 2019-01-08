import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
import { getWeatherByZipCode, removeZip } from '../../redux/actions/weatherActions';
import ZipSearch from '../../components/zip-search';
import ZipCard from '../../components/zip-card';
import './landing.css';

export class Landing extends Component {
  render() {
    const { getWeatherByZipCode, weather, removeZip } = this.props;
    return (
      <div className="landing">
        <div className="landing__welcome mb1">
          <h3 className="mb2">Welcome!</h3>
          <p>Welcome to Daniel's weather app. All weather data is provided by <a target="_blank" rel="noopener noreferrer" href="https://www.apixu.com/">Apixu</a>. Users can search by zip for their desired location. Users can search for multiple locations and add them to the list below. By clicking a list item below the user can get a five day forcast with more specific information.</p>
        </div>
        <div className="landing__search mb2">
          <ZipSearch search={ getWeatherByZipCode } />
        </div>
        <div className="landing__results">
          {weather.length > 0 && weather.map(weather => <ZipCard { ...weather } remove={ removeZip } key={ `weather-${weather.zip}` } />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
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
