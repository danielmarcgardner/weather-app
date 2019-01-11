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

//This is the route where the five day forecast is held. It displays a card for each of the five days and the hero with more information about the selected day.
export class FiveDay extends Component {
  constructor(props) {
    super(props);
    this.closeAndRemoveZip = this.closeAndRemoveZip.bind(this);
    this.openSpecificDay = this.openSpecificDay.bind(this);
    this.closeHero = this.closeHero.bind(this);
    this.returnHome = this.returnHome.bind(this);

    this.state = {
      index: null //Keep track of index of the day to display. If no current day index is null
    };
  }

  componentDidMount() {
    const { weatherZip, getWeatherByZipCode, match } = this.props;
    if (!weatherZip) {
      //If a user has navigated to this page because a friend sent them a link to see the 5 day forcast this is a safeguard that the user can still see the informartion.
      //If the zipcode is not in the redux store fetch it from the API
      getWeatherByZipCode(match.params.zip);
    }
  }

  closeAndRemoveZip() {
    //If a user doesn't want to see this forecast anymore they can return home and delete it from their records.
    const { removeZip, match, history } = this.props;
    removeZip(match.params.zip);
    return history.push('/');
  }

  openSpecificDay(index) {
    //Function passed down to the cards to set specific day to show the hero
    this.setState({ index });
  }

  closeHero() {
    //Passed to hero to close it
    this.setState({ index:null });
  }

  returnHome() {
    //Return home without removing the zip from the store
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { weatherZip } = this.props;
    const { index } = this.state;
    const propsForHero = index === null ? null : weatherZip.forecast.forecastday[index];
    return (
      <div className="fiveday">
        <div className="fiveday__header mb2">
          {weatherZip && <h3 className="fiveday__header--text">5 Day Forecast: {weatherZip.zip}</h3>}
          {weatherZip && <h5 className="fiveday__header--updated">{moment(weatherZip.fetchedAt).calendar()}</h5>}
        </div>
        <div className="fiveday__days">
          {/* Map over and display all the cards */}
          {weatherZip && weatherZip.forecast && weatherZip.forecast.forecastday.map((day, index) => <FiveDayCard { ...day } key={ `fivedaycard-${day.date}` } showMore={ this.openSpecificDay } index={ index } />) }
        </div>
        { propsForHero && <div className="fiveday__hero">
          {/* If there is hero information display the hero */}
          <HeroWeatherDisplay { ...propsForHero } close={ this.closeHero } />
        </div>}
        <div className="fiveday__links my2" onClick={ this.returnHome }>Return home</div>
        <div className="fiveday__links" onClick={ this.closeAndRemoveZip }>Delete weather bookmark and return home</div>
      </div>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  //Ownprops allows the component to pass in their props to the function. In this case it is passing the match prop from react-router-dom to get the zip and find it in the store;
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
