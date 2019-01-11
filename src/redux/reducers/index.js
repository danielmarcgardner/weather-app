import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

//Standard combine reducers
export default combineReducers({
  weather: weatherReducer
});
