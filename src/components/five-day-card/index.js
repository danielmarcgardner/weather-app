import React from 'react';
import moment from 'moment';

export const FiveDayCard = (props) => {
  console.log(props);
  const { date, day } = props;
  return (
    <div className="fivedaycard">
      <h4 className="fivedaycard__date">{moment(date).format('dddd, MMMM Do YYYY')}</h4>
      <p className="fivedaycard__max">{ day.maxtemp_f} &#8457;</p>
      <p className="fivedaycard__min">{ day.mintemp_f} &#8457;</p>
    </div>
  );
};
export default FiveDayCard;
