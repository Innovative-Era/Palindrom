import { combineReducers } from 'redux';
import palindromReducer from './palindromReducer';

export default combineReducers({
  palindrom: palindromReducer
});
