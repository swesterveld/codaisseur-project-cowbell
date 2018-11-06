export const ADD_DISLIKE = 'ADD_DISLIKE';

export function addLike(modelObject) {
  return {
    type: ADD_DISLIKE,
    payload: {...modelObject},
  }
}