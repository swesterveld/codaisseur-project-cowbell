import dummyInitialState from './dummyData';

export default (state = dummyInitialState, action = {}) => {
  switch (action.type) {
    case 'ADD_LIKE':
      const newState = {...state};
      newState[action.payload.fromId].addLike(action.payload.toId);
      return newState;
    case 'ADD_DISLIKE':
      return state;
    default:
      return state;
  }
}