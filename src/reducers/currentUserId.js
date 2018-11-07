import profileFixtures from '../fixtures/profiles';

export default (state = profileFixtures[1].id, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}