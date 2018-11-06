import dummyInitialState from './dummyData';

export default (state = dummyInitialState, action = {}) => {
  switch (action.type) {
    case 'ADD_LIKE':
      state[action.payload.fromId].addLike(action.payload.toId);
      return state;
    case 'ADD_DISLIKE':
      return state;
    case 'UPDATE_CANDIDATES':
      state[action.payload.currentUser.id].candidates = updateCandidates(action.payload.currentUser.id, state);
      return state;
    case 'UPDATE_MATCHES':
      state[action.payload.currentUser.id].matches = updateMatches(action.payload.currentUser.id, state);
      return state;
    default:
      return state;
  }
}

function updateCandidates(currentUserId, profiles) {
  if (profiles[currentUserId].type === 'musician') {
    return Object.values(profiles)
      .filter(profile => profile.type === 'band')
      .map(profile => profile.id)
  }
  else if (profiles[currentUserId].type === 'band') {
    return Object.values(profiles)
      .filter(profile => profile.type === 'musician')
      .map(profile => profile.id)
  }
  else throw new Error('Current user-ID is invalid');
}

function updateMatches(currentUserId, profiles) {
  return profiles[currentUserId].likes.filter(id => profiles[id].likes.includes(currentUserId))
}