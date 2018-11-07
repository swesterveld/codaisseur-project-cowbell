export const ADD_LIKE = 'ADD_LIKE';

export function addLike(fromId, toId) {
  return {
    type: ADD_LIKE,
    payload: {
      fromId,
      toId,
    }
  }
}