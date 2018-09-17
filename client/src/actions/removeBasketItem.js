import { REMOVE_BASKET_ITEM } from "./actionTypes";

const removeBasketItem = mealId => dispatch => {
  dispatch({
    type: REMOVE_BASKET_ITEM,
    payload: { mealId }
  });
};

export default removeBasketItem;
