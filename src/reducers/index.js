import { combineReducers } from 'redux';
import profiles from './profiles';
import currentUser from './currentUser';

export default combineReducers({
  profiles,
  currentUser,
})