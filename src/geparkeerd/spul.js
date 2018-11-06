const setCandidates = {};

function getCandidates(state, currentUserId) {
  return function (dispatch) {
    let candidateIds = [];
      if (state[currentUserId].type === 'musician') {
        candidateIds = Object.values(state)
          .filter(profile => profile.type === 'musician')
          .map(profile => profile.id)
      }
      else if (state[currentUserId].type === 'band') {
        candidateIds = Object.values(state)
          .filter(profile => profile.type === 'band')
          .map(profile => profile.id)
      }
      else throw new Error('Current user-ID is invalid');
      dispatch(setCandidates(candidateIds));
  }
}