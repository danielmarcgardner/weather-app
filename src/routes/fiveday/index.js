import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { func, object } from 'prop-types';
import moment from 'moment';
import { getWeatherByZipCode, removeZip } from '../../redux/actions/weatherActions';
import { find } from '../../utils/find';
import FiveDayCard from '../../components/five-day-card';
import HeroWeatherDisplay from '../../components/hero-weather-display';
import './fiveday.css';

export class FiveDay extends Component {
  constructor(props) {
    super(props);
    this.closeAndRemoveZip = this.closeAndRemoveZip.bind(this);
    this.openSpecificDay = this.openSpecificDay.bind(this);
    this.closeHero = this.closeHero.bind(this);
    this.returnHome = this.returnHome.bind(this);

    this.state = {
      index: null
    };
  }

  componentDidMount() {
    const { weatherZip, getWeatherByZipCode, match } = this.props;
    if (!weatherZip) {
      getWeatherByZipCode(match.params.zip);
    }
  }

  closeAndRemoveZip() {
    const { removeZip, match, history } = this.props;
    removeZip(match.params.zip);
    return history.push('/');
  }

  openSpecificDay(index) {
    this.setState({ index });
  }

  closeHero() {
    this.setState({ index:null });
  }

  returnHome() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { weatherZip } = this.props;
    const { index } = this.state;
    const propsForHero = index !== null ? weatherZip.forecast.forecastday[index] : null;
    return (
      <div className="fiveday">
        <div className="fiveday__header mb2">
          {weatherZip && <h3 className="fiveday__header--text">5 Day Forecast: {weatherZip.zip}</h3>}
          {weatherZip && <h5 className="fiveday__header--updated">{moment(weatherZip.fetchedAt).calendar()}</h5>}
        </div>
        <div className="fiveday__days">
          {weatherZip && weatherZip.forecast && weatherZip.forecast.forecastday.map((day, index) => <FiveDayCard { ...day } key={ `fivedaycard-${day.date}` } showMore={ this.openSpecificDay } index={ index } />) }
        </div>
        { propsForHero && <div className="fiveday__hero">
          <HeroWeatherDisplay { ...propsForHero } close={ this.closeHero } />
        </div>}
        <div className="fiveday__links my2" onClick={ this.returnHome }>Return home</div>
        <div className="fiveday__links" onClick={ this.closeAndRemoveZip }>Delete weather bookmark and return home</div>
      </div>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  const weatherZip = find(state.weather.weatherZips, (z) => z.zip === ownProps.match.params.zip);
  return { weatherZip };
};

const mapDispatchToProps = {
  getWeatherByZipCode,
  removeZip
};

FiveDay.propTypes = {
  weatherZip: object,
  getWeatherByZipCode: func,
  match: object,
  removeZip: func,
  history: object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FiveDay));
