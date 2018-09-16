import { GET_MEAL_INFO } from "../actions/constants";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_MEAL_INFO}_FULFILLED`:
      return { mealData: action.payload.data, status: "Fulfilled" };
    case `${GET_MEAL_INFO}_PENDING`:
      return { status: "Pending" };
    case `${GET_MEAL_INFO}_REJECTED`:
      return { status: "Rejected" };
    default:
      return state;
  }
}
