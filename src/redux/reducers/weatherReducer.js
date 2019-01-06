import * as weatherConstants from '../constants/weatherConstants';

export default function WeatherReducer(state = {}, action = {}) {
  switch (action.type) {
    case weatherConstants.RECEIVE_ZIP: {
      return { ...state, [action.zip]: action.data };
    }
    case weatherConstants.DELETE_ZIP: {
      const newState = { ...state };
      delete newState[action.zip];
      return { ...newState };
    }
    default:
      return state;
  }
}
