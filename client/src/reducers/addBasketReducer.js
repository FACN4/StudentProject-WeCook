import { ADD_TO_BASKET } from "../actions/actionTypes";

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
    default:
      return state;
  }
}
