import { ADD_TO_BASKET, REMOVE_BASKET_ITEM } from "../actions/actionTypes";

const initialState = {
  basket: []
};

export default function(state = initialState, action) {
  let { basket: oldBasket } = state;
  console.log(oldBasket);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...oldBasket, action.payload]
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
