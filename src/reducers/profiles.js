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
    case 'ADD_FILTER':
      console.log(action.payload.filterFunction);
      state[action.payload.currentUserId].addFilter(action.payload.filterName, action.payload.filterFunction, action.payload.extraArgument);
      return state;
    case 'REMOVE_FILTER':
      state[action.payload.currentUserId].removeFilter(action.payload.filterName, action.payload.filterFunction, action.payload.extraArgument);
      return state;
    case 'CHANGE_FILTER':
      state[action.payload.currentUserId].changeFilter(action.payload.filterName, action.payload.filterFunction, action.payload.extraArgument);
      return state;
    default:
      return state;
  }
}

function updateCandidates(currentUserId, profiles) {
  let listOfCandidates = selectByCorrectUsertype(currentUserId, profiles);
  listOfCandidates = selectByLikesAndDislikes(currentUserId, listOfCandidates, profiles);
  listOfCandidates = selectByUserFilters(currentUserId, listOfCandidates, profiles);
  return listOfCandidates;
}

function selectByCorrectUsertype(currentUserId, profiles) {
  if (profiles[currentUserId].type === 'musician') {
    return Object.values(profiles)
      .filter(profile => profile.type === 'band')
      .map(profile => profile.id);
  }
  // Dit gaat ervanuit dat je dit 'type' nodig hebt en dat de currentUserId op een band gezet wordt als hij een band vertegenwoordigt.
  // Kan wss ook gedaan worden met checken of huidige user een band heeft etc maar zou veel ingewikkelder zijn.
  else if (profiles[currentUserId].type === 'band') {
    return Object.values(profiles)
      .filter(profile => profile.type === 'musician')
      .map(profile => profile.id);
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

function selectByUserFilters(currentUserId, candidateList, profiles) {
  let filteredCandidates = candidateList;
  profiles[currentUserId].filters.forEach(filterNamePlusFunction => { /// Zou kunnen met reduce I guess
    filteredCandidates = filteredCandidates.filter(candidateId => {
      // Check if the property to filter on exists
      console.log(profiles)
      console.log(profiles[candidateId].genres);
      if (profiles[candidateId][filterNamePlusFunction[0]]) {
        // Run the function defined in the current filter of the current user
        console.log('yee');
        console.log(filterNamePlusFunction[1]);
        return filterNamePlusFunction[1](profiles[candidateId][filterNamePlusFunction[0]]);
      }
      else return true;
    });
  });
  return filteredCandidates;
}

// Kan schaalbaar gemaakt worden door op het moment van een like alle matches te updaten ofzo
function updateMatches(currentUserId, profiles) {
  return profiles[currentUserId].likes.filter(id => profiles[id].likes.includes(currentUserId))
}