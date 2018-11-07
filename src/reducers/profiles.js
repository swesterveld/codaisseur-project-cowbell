import profileFixtures from '../fixtures/profiles';

export default (state = profileFixtures, action = {}) => {
  switch (action.type) {
    case 'ADD_LIKE':
      state[action.payload.fromId].addLike(action.payload.toId);
      return state;
    case 'ADD_DISLIKE':
      state[action.payload.fromId].addDislike(action.payload.toId);
      return state;
    case 'UPDATE_CANDIDATES':
      state[action.payload.currentUserId].candidates = updateCandidates(action.payload.currentUserId, state);
      return state;
    case 'UPDATE_MATCHES':
      state[action.payload.currentUserId].matches = updateMatches(action.payload.currentUserId, state);
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
  ///Dit kan flink fout gaan want welke userID wordt gestored?!! In principe van de huidige user toch? Je kan niet zomaar alles namens die ene user doen want dingen moeten wel in de likes van de band gezet worden en dit systeem is 'dom' dus weet niet of de huidige user wel of niet een band heeft. Dus in principe als je inlogt als een user die een band heeft dan meot de currentUserId op het id van zijn/haar band gezet worden
  else if (profiles[currentUserId].type === 'band') {
    return Object.values(profiles)
      .filter(profile => profile.type === 'musician')
      .map(profile => profile.id)
  }
  else throw new Error('Current user-ID is invalid');
}

// Kan schaalbaar gemaakt worden door op het moment van een like alle 
function updateMatches(currentUserId, profiles) {
  return profiles[currentUserId].likes.filter(id => profiles[id].likes.includes(currentUserId))
}