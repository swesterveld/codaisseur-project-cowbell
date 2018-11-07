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
  let listOfCandidates = selectByCorrectUsertype(currentUserId, profiles);
  listOfCandidates = selectByLikesAndDislikes(currentUserId, listOfCandidates, profiles);
  return listOfCandidates;
}

function selectByCorrectUsertype(currentUserId, profiles) {
  if (profiles[currentUserId].type === 'musician') {
    return Object.values(profiles)
      .filter(profile => profile.type === 'band')
      .map(profile => profile.id)
  }
  // Dit gaat ervanuit dat je dit 'type' nodig hebt en dat de currentUserId op een band gezet wordt als hij een band vertegenwoordigt.
  // Kan wss ook gedaan worden met checken of huidige user een band heeft etc maar zou veel ingewikkelder zijn.
  else if (profiles[currentUserId].type === 'band') {
    return Object.values(profiles)
      .filter(profile => profile.type === 'musician')
      .map(profile => profile.id)
  }
  else throw new Error('Current user-ID is invalid');
}

function selectByLikesAndDislikes(currentUserId, candidateList, profiles) {
  return candidateList.filter(candidateId => {
    if (profiles[currentUserId].likes.includes(candidateId) || 
        profiles[currentUserId].dislikes.includes(candidateId) ||
        profiles[candidateId].dislikes.includes(currentUserId)) {
      return false;
    }
    else return true;
  });
}

// Kan schaalbaar gemaakt worden door op het moment van een like alle matches te updaten ofzo
function updateMatches(currentUserId, profiles) {
  return profiles[currentUserId].likes.filter(id => profiles[id].likes.includes(currentUserId))
}