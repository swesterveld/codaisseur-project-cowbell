import dummyInitialState from './dummyData';
import {setCandidates} from '../actions/candidates'

export default (state = dummyInitialState, action = {}) => {
  switch (action.type) {
    case 'ADD_LIKE':
      const newState = {...state};
      newState[action.payload.fromId].addLike(action.payload.toId);
      return state;
    case 'ADD_DISLIKE':
      return state;
    default:
      return state;
  }
}