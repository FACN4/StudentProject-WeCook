import { GET_MEAL_INFO_PENDING, GET_MEAL_INFO_FULFILLED, GET_MEAL_INFO_REJECTED} from '../actions/types';

const initialState = {
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEAL_INFO_FULFILLED:
      return {mealData:action.payload.data, status:"Fulfilled"};
    case GET_MEAL_INFO_PENDING:
      return {status:"Pending"};
    case GET_MEAL_INFO_REJECTED:
      return {status:"Rejected"}
    default:
      return state;
  }
}
