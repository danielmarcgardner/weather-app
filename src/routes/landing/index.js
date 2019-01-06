import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { getWeatherByZipCode } from '../../redux/actions/weatherActions';
import ZipSearch from '../../components/zip-search';
import './landing.css';

export class Landing extends Component {
  render() {
    const { getWeatherByZipCode } = this.props;
    return (
      <div className="landing">
        <ZipSearch search={ getWeatherByZipCode } />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getWeatherByZipCode
};

Landing.propTypes = {
  getWeatherByZipCode: func
};

export default connect(null, mapDispatchToProps)(Landing);
