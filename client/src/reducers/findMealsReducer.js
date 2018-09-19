import { FIND_MEALS } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${FIND_MEALS}_PENDING`:
      return { isPending: true };
    case `${FIND_MEALS}_FULFILLED`:
      return { data: action.payload.data, isFulfilled: true };
    case `${FIND_MEALS}_REJECTED`:
      return { isRejected: true, error: action.payload };
    default:
      return state;
  }
}
