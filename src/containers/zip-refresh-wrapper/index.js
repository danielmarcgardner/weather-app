import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { func, string, arrayOf, number, node } from 'prop-types';
import { getWeatherByZipCode } from '../../redux/actions/weatherActions';

export class ZipRefreshWrapper extends Component {
  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
  }

  componentDidMount() {
    const { interval } = this.props;
    this.refreshData();
    this.refresh = setInterval(this.refreshData, interval);
  }

  refreshData() {
    const { weatherZips, getWeatherByZipCode } = this.props;
    if (weatherZips.length > 0) {
      return weatherZips.forEach(zip => getWeatherByZipCode(zip));
    }
    return;
  }
  componentWillUnmount() {
    clearInterval(this.refresh);
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        {React.cloneElement(children)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weatherZips: state.weather.weatherZips.map(z => z.zip)
});

const mapDispatchToProps = {
  getWeatherByZipCode
};

ZipRefreshWrapper.propTypes = {
  getWeatherByZipCode: func,
  weatherZips: arrayOf(string),
  interval: number,
  children: node
};

ZipRefreshWrapper.defaultProps = {
  weatherZips: [],
  interval: 300000
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ZipRefreshWrapper));
