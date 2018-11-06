import profileFixtures from '../fixtures/profiles';

export default (state = profileFixtures[1], action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}