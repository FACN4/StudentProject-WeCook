import { ADD_TO_BASKET, REMOVE_BASKET_ITEM } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  if (action.type == ADD_TO_BASKET || action.type == REMOVE_BASKET_ITEM) {
    var { mealId, quantity, mealInfo } = action.payload;
    var acc = 0;
    if (state.hasOwnProperty(mealId)) {
      acc = state[mealId].quantity;
    }
  }
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        [mealId]: { quantity: quantity + acc, mealInfo }
      };
    case REMOVE_BASKET_ITEM: {
      const { [mealId]: value, ...stateWithoutMeal } = state;
      return stateWithoutMeal;
    }
    default:
      return state;
  }
}
