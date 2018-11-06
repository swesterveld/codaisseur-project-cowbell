export const ADD_LIKE = 'ADD_LIKE';

export function addLike(fromId, toId) {
  return {
    type: ADD_LIKE,
    data: {
      from: fromId,
      to: toId,
    }
  }
}

/*


bandIds beginnen met een 'B'
*/