import {
  GET_MEAL_LIST_PENDING,
  GET_MEAL_LIST_FULFILLED,
  GET_MEAL_LIST_REJECTED
} from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEAL_LIST_FULFILLED:
      return { mealList: action.payload.data, status: "Fulfilled" };
    case GET_MEAL_LIST_PENDING:
      return { status: "Pending" };
    case GET_MEAL_LIST_REJECTED:
      return { status: "Rejected" };
    default:
      return state;
  }
}
