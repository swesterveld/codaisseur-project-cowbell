import { combineReducers } from 'redux';
import profiles from './profiles';
import currentUserId from './currentUserId';

export default combineReducers({
  profiles,
  currentUserId,
})