import { ADD_TO_BASKET, REMOVE_BASKET_ITEM } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  let { basket: oldBasket } = state;
  if (action.type == "ADD_TO_BASKET") {
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
    case REMOVE_BASKET_ITEM:
      return {
        ...state,
        basket: [
          ...oldBasket.slice(0, action.payload.mealId),
          ...oldBasket.slice(action.payload.mealId + 1)
        ]
      };
    default:
      return state;
  }
}
