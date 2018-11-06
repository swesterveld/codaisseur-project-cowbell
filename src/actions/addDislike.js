export const ADD_DISLIKE = 'ADD_DISLIKE';

export function addDislike(fromId, toId) {
  return {
    type: ADD_DISLIKE,
    payload: {
      from: fromId,
      to: toId,
    }
  }
}