import * as weatherConstants from '../constants/weatherConstants';

//Actions
const receiveWeather = (zip, data) => ({
  type: weatherConstants.RECEIVE_ZIP,
  data: { ...data, zip }
});

//Thunks
export const getWeatherByZipCode = (zip) => async (dispatch, getState, { Api }) => {
  const data = await Api.getWeatherByZipCode(zip);
  return dispatch(receiveWeather(zip, data));
};
