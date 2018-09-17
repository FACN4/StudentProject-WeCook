import { ADD_TO_BASKET, REMOVE_BASKET_ITEM } from "../actions/actionTypes";

const initialState = {
  basket: []
};

export default function(state = initialState, action) {
  let { basket: oldBasket } = state;
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...oldBasket, action.payload]
      };
    case REMOVE_BASKET_ITEM:
      return {
        ...state,
        basket: []
      };

    default:
      return state;
  }
}
