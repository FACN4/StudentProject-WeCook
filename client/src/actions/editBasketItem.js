import { EDIT_BASKET_ITEM } from "./actionTypes";

const editBasketItem = (mealId, quantity) => dispatch => {
  dispatch({
    type: EDIT_BASKET_ITEM,
    payload: { mealId, quantity }
  });
};

export default editBasketItem;
