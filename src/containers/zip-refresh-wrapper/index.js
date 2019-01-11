import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { func, string, arrayOf, number, node } from 'prop-types';
import { getWeatherByZipCode } from '../../redux/actions/weatherActions';

export class ZipRefreshWrapper extends Component {
  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
    this.refresh = null; //Placeholder for refresh interval
  }

  componentDidMount() {
    const { interval } = this.props;
    this.refreshData(); //Call initial func on componentDidMount
    //Set a reference to the function with the passed in interval or the default.
    //Default to 5 min but currently passing in 30 seconds.
    //While the prompt called for every 5 min to update, if there are multiple zips in state checking every 30 seconds to see if one is more than 5 min old.
    //Otherwise there would be a mass update every 5 min and some may not be 5 min old yet.
    this.refresh = setInterval(this.refreshData, interval);
  }

  refreshData() {
    const { weatherZips, getWeatherByZipCode } = this.props;
    if (weatherZips.length > 0) {
      //If there are zipcodes present call the get weather Thunk.
      // The Thunk will check to see if it is more than 5 minutes old and call the API if it is
      return weatherZips.forEach(zip => getWeatherByZipCode(zip));
    }
    //If no zips just return
    return;
  }
  componentWillUnmount() {
    //When unmounting clear the interval
    clearInterval(this.refresh);
  }
  render() {
    //Render the react children
    const { children } = this.props;
    return (
      <div>
        {React.cloneElement(children)}
      </div>
    );
  }
}

//Pull only the zips in state.
export const mapStateToProps = state => ({
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
  interval: 30000
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ZipRefreshWrapper));
