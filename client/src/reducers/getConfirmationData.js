import { GET_CONFIRMATION_DATA } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_CONFIRMATION_DATA}_PENDING`:
      return { isPending: true };
    case `${GET_CONFIRMATION_DATA}_FULFILLED`:
      return { data: action.payload.data, isFulfilled: true };
    case `${GET_CONFIRMATION_DATA}_REJECTED`:
      return { isRejected: true, error: action.payload };
    default:
      return state;
  }
}
