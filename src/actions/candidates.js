export const GET_CANDIDATES = 'GET_CANDIDATES';

export function getCandidates(currentUserId) {
  return {
    type: GET_CANDIDATES,
    payload: currentUserId,
  }
}

export const SET_CANDIDATES = 'SET_CANDIDATES';

export function setCandidates(candidateIds) {
  return {
    type: GET_CANDIDATES,
    payload: candidateIds,
  }
}