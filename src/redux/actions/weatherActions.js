import moment from 'moment';
import * as weatherConstants from '../constants/weatherConstants';
import { isMoreThan5MinOld } from '../../utils/date';
import { find } from '../../utils/find';

//Actions
const receiveWeather = (zip, data, fetchedAt) => ({
  type: weatherConstants.RECEIVE_ZIP,
  data: { ...data, zip, fetchedAt }
});

export const removeZip = zip => ({
  type: weatherConstants.DELETE_ZIP,
  zip
});

//Thunks
export const getWeatherByZipCode = (zip, timestamp = moment()) => async (dispatch, getState, { Api }) => {
  const currentArrayOfWeather = getState().weather.weatherZips;
  const foundInState = find(currentArrayOfWeather, (current) => current.zip === zip);
  if ((foundInState && !foundInState.error && isMoreThan5MinOld(foundInState.fetchedAt)) || !foundInState) {
    try {
      const data = await Api.getWeatherByZipCode(zip);
      return dispatch(receiveWeather(zip, data, timestamp));
    } catch (e) {
      dispatch(receiveWeather(zip, { error: true }));
    }
  }
  return Promise.resolve(foundInState);
};
