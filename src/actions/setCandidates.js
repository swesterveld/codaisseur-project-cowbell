export const SET_CANDIDATES = 'SET_CANDIDATES';

export function setCandidates(candidateProfiles) {
  return {
    type: SET_CANDIDATES,
    payload: candidateProfiles,
  }
}