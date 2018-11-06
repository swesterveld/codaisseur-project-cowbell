import {GET_CANDIDATES_FOR_PROFILE} from '../actions/candidates'

export default(state = [], action = {}) => {
  switch (action.type) {
    case GET_CANDIDATES_FOR_PROFILE:
      const profile = action.payload.profile
      if (profile.type === 'musician') {
        // it's a musician => filter profiles of type 'band'
      } else {
        // it's a band => filter profiles of type 'musician' not connected to a band
      }
      break
    default:
      return state
  }
}