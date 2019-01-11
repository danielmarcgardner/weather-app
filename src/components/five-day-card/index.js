import React from 'react';
import moment from 'moment';
import { func, object, number, string } from 'prop-types';
import './five-day-card.css';

export const FiveDayCard = ({ date, day, showMore, index }) => (
  <div className="fivedaycard">
    <h4 className="fivedaycard__day">{moment(date).format('dddd')}</h4>
    <h5 className="fivedaycard__day">{moment(date).format('MMMM Do YYYY')}</h5>
    <div className="fivedaycard__day--current">
      <img src={ `https:${day.condition.icon}` } alt={ day.condition.text } className="fivedaycard__day--current-img" />
    </div>
    <div className="fivedaycard__temps">
      <p className="fivedaycard__temps--max">{ day.maxtemp_f} &#8457;</p>
      <p className="fivedaycard__temps--min">{ day.mintemp_f} &#8457;</p>
      <span className="fivedaycard__temps--viewmore typ--link" onClick={ () => showMore(index) }>View full report</span>
    </div>
  </div>
);

FiveDayCard.propTypes = {
  day: object,
  date: string,
  showMore: func,
  index: number
};

FiveDayCard.defaultProps = {
  showMore: () => { /* DO NOTHING*/ }
};

export default FiveDayCard;
