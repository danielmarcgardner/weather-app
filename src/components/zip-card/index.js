import React from 'react';
import { string, object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './zip-card.css';

export const ZipCard = ({ location, current, zip, remove }) => {
  const { name, region, localtime } = location;
  const { temp_f, condition } = current;
  return (
    <div className="zipcard">
      <span className="zipcard__close" onClick={ () => remove(zip) }>+</span>
      <div className="zipcard__header mb2">
        <h5 className="zipcard__header--city">{name},</h5>
        <p className="zipcard__header--state">{region}</p>
        <p className="zipcard__header--zip mt2">{ zip }</p>
      </div>
      <div className="zipcard__current">
        <h4 className="zipcard__current--temp mb1">{ temp_f } &#8457;</h4>
        <img src={ `http:${condition.icon}` } alt={ condition.text } className="zipcard__current--img" />
        <p className="zipcard__current--text">{condition.text}</p>
        <Link to={ `/zip/${zip}` } className="zipcard__current--link my1 typ--link">View 5 day forcard</Link>
      </div>
      <p className="zipcard__time">Last updated: {moment(localtime).calendar()}</p>
    </div>
  );
};

ZipCard.propTypes = {
  location: object,
  current: object,
  zip: string,
  remove: func
};

export default ZipCard;
