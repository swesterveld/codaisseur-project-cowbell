import profileFixtures from '../fixtures/profiles';

export default (state = profileFixtures, action = {}) => {
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