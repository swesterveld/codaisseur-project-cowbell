export const GET_MATCHES = 'GET_MATCHES';

export function getMatches(currentUserId) {
  return {
    type: GET_MATCHES,
    payload: currentUserId,
  }
}

export const SET_MATCHES = 'SET_MATCHES';

export function setMatches(profileObject) {
  return {
    type: SET_MATCHES,
    payload: profileObject,
  }
}