import { GET_MEAL_INFO, GET_MEAL_INFO_PENDING, GET_MEAL_INFO_FULFILLED, GET_MEAL_INFO_REJECTED} from '../actions/types';

const initialState = {
  mealInfo: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEAL_INFO:
      return {...state, ...action.payload}
    default:
      return state;
  }
}
