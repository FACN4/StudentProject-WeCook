import { GET_MEAL_INFO } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_MEAL_INFO}_FULFILLED`:
      return { data: action.payload.data, isFulfilled: true };
    case `${GET_MEAL_INFO}_PENDING`:
      return { isPending: true };
    case `${GET_MEAL_INFO}_REJECTED`:
      return { isRejected: true, error: action.payload };
    default:
      return state;
  }
}
