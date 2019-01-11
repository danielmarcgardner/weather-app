import * as weatherConstants from '../constants/weatherConstants';
import { findIndex } from '../../utils/find';

//Initial state;
const initialState = { weatherZips: [] };

export default function WeatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case weatherConstants.RECEIVE_ZIP: {
      const index = findIndex(state.weatherZips, (weatherZip) => weatherZip.zip === action.data.zip); //See if in state;
      if (index === -1) { //If not in state add it to state
        return { ...state, weatherZips:[...state.weatherZips, action.data] };
      }
      const copy = state.weatherZips.slice(); //If in state, take a copy (to avoid mutation of original state)
      copy.splice(index, 1, action.data); //Remove old and add new
      return { ...state, weatherZips: copy }; //Return new state
    }
    case weatherConstants.DELETE_ZIP: {
      const copy = state.weatherZips.slice(); //Take a copy so not to mutate
      const index = findIndex(state.weatherZips, (weatherZip) => weatherZip.zip === action.zip); //Find index of one to delete
      if (index === -1) { //If unfound - as a safety precaution return original state
        return state;
      }
      copy.splice(index, 1); //Remove old
      return { ...state, weatherZips: copy }; //Set state
    }
    default:
      return state;
  }
}
