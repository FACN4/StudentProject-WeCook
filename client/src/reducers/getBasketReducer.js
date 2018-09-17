import { GET_BASKET } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_BASKET}_PENDING`:
      return { isPending: true };
    case `${GET_BASKET}_FULFILLED`:
      return { data: action.payload.data, isFulfilled: true, isPending: false };
    case `${GET_BASKET}_REJECTED`:
      return { isRejected: true, error: action.payload, isPending: false };
    default:
      return state;
  }
}
