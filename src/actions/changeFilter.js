export const CHANGE_FILTER = 'CHANGE_FILTER';

export function changeFilter(currentUserId, filterName, filterFunction, extraArgument=null) {
  return {
    type: CHANGE_FILTER,
    payload: {
      currentUserId,
      filterName,
      filterFunction,
      extraArgument
    }
  }
}