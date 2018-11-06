export const GET_CANDIDATES_FOR_PROFILE = 'GET_CANDIDATES_FOR_PROFILE'

// Action will pass a profile to get candidates for
export function getCandidatesForProfile(profile) {
  return {
    type: GET_CANDIDATES_FOR_PROFILE
    payload: {
      profile
    }
  }
}