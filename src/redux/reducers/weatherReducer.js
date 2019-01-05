import * as weatherConstants from '../constants/weatherConstants';

const initialState = {};

export default (action = {}, state = initialState) => {
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
};
