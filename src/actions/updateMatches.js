export const UPDATE_MATCHES = 'UPDATE_MATCHES';

export function updateMatches(currentUserId) {
  return {
    type: UPDATE_MATCHES,
    payload: currentUserId,
  }
}