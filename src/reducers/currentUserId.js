import profileFixtures from '../fixtures/profiles';

export default (state = profileFixtures[1].id, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_PROFILE':
      // for now this is hidden for testing purposes, to switch from band to musician
      return state === 7 ? 1: 7
    default:
      return state;
  }
}