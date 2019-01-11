import * as weatherConstants from '../constants/weatherConstants';
import { findIndex } from '../../utils/find';

const initialState = { weatherZips: [] };

export default function WeatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case weatherConstants.RECEIVE_ZIP: {
      const index = findIndex(state.weatherZips, (weatherZip) => weatherZip.zip === action.data.zip);
      if (index === -1) {
        return { ...state, weatherZips:[...state.weatherZips, action.data] };
      }
      const copy = state.weatherZips.slice();
      copy.splice(index, 1, action.data);
      return { ...state, weatherZips: copy };
    }
    case weatherConstants.DELETE_ZIP: {
      const copy = state.weatherZips.slice();
      const index = findIndex(state.weatherZips, (weatherZip) => weatherZip.zip === action.zip);
      if (index === -1) {
        return state;
      }
      copy.splice(index, 1);
      return { ...state, weatherZips: copy };
    }
    default:
      return state;
  }
}
