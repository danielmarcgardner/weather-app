import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { find } from '../../utils/find';
import FiveDayCard from '../../components/five-day-card';

export class FiveDay extends Component {
  render() {
    const { weatherZip } = this.props;
    return (
      <div className="fiveday">
        {weatherZip && <h3 className="fiveday__header">5 Day Forcast: {weatherZip.zip}</h3>}
        {weatherZip && weatherZip.forecast && weatherZip.forecast.forecastday.map(day => <FiveDayCard { ...day } />) }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const weatherZip = find(state.weather.weatherZips, (z) => z.zip === ownProps.match.params.zip);
  return { weatherZip };
};

export default withRouter(connect(mapStateToProps)(FiveDay));
