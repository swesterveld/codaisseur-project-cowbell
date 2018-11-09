import profileFixtures from '../fixtures/profiles';

export default (state = profileFixtures[2].id, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_PROFILE':
      // for now this is hidden for testing purposes, to switch from band to musician
      return state === 9 ? 2: 9
    default:
      return state;
  }
}