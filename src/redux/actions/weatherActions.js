import moment from 'moment';
import * as weatherConstants from '../constants/weatherConstants';
import { isMoreThan5MinOld } from '../../utils/date';
import { find } from '../../utils/find';

//Actions
const receiveWeather = (zip, data, fetchedAt) => ({ //Action that is dispatched with a new or updated weather from a zip
  type: weatherConstants.RECEIVE_ZIP,
  data: { ...data, zip, fetchedAt }
});

export const removeZip = zip => ({ //Action that is dispatched with a zip to remove from state;
  type: weatherConstants.DELETE_ZIP,
  zip
});

//Thunks
//getWeatherByZipCode takes a zipcode and a timestamp (defaulted to now)
//It returns a function that takes the dispatch function, getState function (for getting current state), and the Api class passed in during creation of the store
export const getWeatherByZipCode = (zip, timestamp = moment()) => async (dispatch, getState, { Api }) => {
  const currentArrayOfWeather = getState().weather.weatherZips; //Get current state
  const foundInState = find(currentArrayOfWeather, (current) => current.zip === zip); //Find if in state
  if ((foundInState && !foundInState.error && isMoreThan5MinOld(foundInState.fetchedAt)) || !foundInState) { //Fetch from API if not found or is older than 5 minutes and does not have an error
    try {
      const data = await Api.getWeatherByZipCode(zip); //Async get from API
      return dispatch(receiveWeather(zip, data, timestamp)); //Dispatch the receiveWeather action
    } catch (e) {
      dispatch(receiveWeather(zip, { error: true })); //If unfound in api then still display that the user has searched for this but with the error flag
    }
  }
  return Promise.resolve(foundInState); //Return the current zip if in state;
};
