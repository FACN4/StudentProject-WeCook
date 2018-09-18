import { ADD_TO_BASKET } from "./actionTypes";

const addToBasket = (mealId, mealInfo, quantity = 1) => dispatch => {
  dispatch({
    type: ADD_TO_BASKET,
    payload: { mealId, mealInfo, quantity }
  });
};

export default addToBasket;
