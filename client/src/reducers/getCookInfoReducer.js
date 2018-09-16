import { GET_COOK_INFO } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_COOK_INFO}_PENDING`:
      return { isPending: true };
    case `${GET_COOK_INFO}_FULFILLED`:
      return { data: action.payload.data, isFulfilled: true, isPending: false };
    case `${GET_COOK_INFO}_REJECTED`:
      return { isRejected: true, error: action.payload, isPending: false };
    default:
      return state;
  }
}
