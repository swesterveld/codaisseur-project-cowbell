export const REMOVE_FILTER = 'REMOVE_FILTER';

export function removeFilter(currentUserId, filterName, filterFunction, extraArgument=null) {
  return {
    type: REMOVE_FILTER,
    payload: {
      currentUserId,
      filterName,
      filterFunction,
      extraArgument,
    }
  }
}