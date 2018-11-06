export const SET_MATCHES = 'SET_MATCHES';

export function setMatches(matchProfiles) {
  return {
    type: SET_MATCHES,
    payload: matchProfiles,
  }
}