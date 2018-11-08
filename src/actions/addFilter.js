export const ADD_FILTER = 'ADD_FILTER';

export function addFilter(currentUserId, filterName, filterFunction, extraArgument=null) {
  return {
    type: ADD_FILTER,
    payload: {
      currentUserId,
      filterName,
      filterFunction,
      extraArgument
    }
  }
}