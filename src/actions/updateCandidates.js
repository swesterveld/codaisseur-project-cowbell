export const UPDATE_CANDIDATES = 'UPDATE_CANDIDATES';

export function updateCandidates(currentUserId) {
  return {
    type: UPDATE_CANDIDATES,
    payload: {currentUserId},
  }
}