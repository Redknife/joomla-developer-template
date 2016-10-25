import { combineReducers } from 'redux';
import * as ActionTypes from './actions';

function breakpoint(state = 'xs', action) {
  switch (action.type) {
    case ActionTypes.BP_CHANGE:
      return action.bp;
    default:
      return state;
  }
}

// Combine
export default combineReducers({
  breakpoint,
});

