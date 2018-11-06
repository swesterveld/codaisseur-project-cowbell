export const GET_CANDIDATES_FOR_ID = 'GET_CANDIDATES_FOR_ID'

// Action will pass an id to get candidates for
export function getCandidatesForId(id) {
  return {
    type: GET_CANDIDATES_FOR_ID
    payload: {
      id
    }
  }
}