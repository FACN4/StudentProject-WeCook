import { FIND_MEALS, MEALS_FOUND } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${FIND_MEALS}_PENDING`:
      return { isPending: true };
    case `${FIND_MEALS}`:
      return { data: action.payload.data, isFulfilled: true };
    case `${FIND_MEALS}_REJECTED`:
      return { isRejected: true, error: action.payload };
    case `${MEALS_FOUND}`:
      return {...state, isFulfilled: false}
    default:
      return state;
  }
}
