import React from 'react';
import { string, object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './zip-card.css';

//Returns the card on the landing page that is the starting point for the viewing more information about the zips weather.
export const ZipCard = ({ location, current, zip, remove, fetchedAt }) => {
  //Abstracted the remove item since its used in both
  const removeItem = <span className="zipcard__close" onClick={ () => remove(zip) }>+</span>;
  if (!location) {
    //This is a catch default for if the zipcode was not found by the API
    return (<div className="zipcard">
      {removeItem}
      <div className=" zipcard__notfound">
        <h5 className="zipcard__notfound--zip my2">{zip}</h5>
        <p className="zipcard__notfound--message">Unable to locate zipcode</p>
      </div>
    </div>);
  }
  const { name, region } = location;
  const { temp_f, condition } = current;
  return (
    <div className="zipcard">
      {removeItem}
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
      <p className="zipcard__time">Last updated: {moment(fetchedAt).calendar()}</p>
    </div>
  );
};

ZipCard.propTypes = {
  location: object,
  current: object,
  zip: string,
  remove: func,
  fetchedAt: object
};

export default ZipCard;
