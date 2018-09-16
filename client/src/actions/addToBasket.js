import { ADD_TO_BASKET } from "./actionTypes";

const addToBasket = mealId => dispatch => {
  dispatch({
    type: ADD_TO_BASKET,
    payload: { id: mealId }
  });
};

export default addToBasket;
