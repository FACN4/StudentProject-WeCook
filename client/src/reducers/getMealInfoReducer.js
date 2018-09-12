import { GET_MEAL_INFO_PENDING, GET_MEAL_INFO_FULFILLED, GET_MEAL_INFO_REJECTED} from '../actions/types';

const initialState = {
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEAL_INFO_FULFILLED:
      return {mealData:action.payload.data};
    case GET_MEAL_INFO_PENDING:
      return {mealDataLoading:true};
    case GET_MEAL_INFO_REJECTED:
      return {mealDataRejected:true}
    default:
      return state;
  }
}
