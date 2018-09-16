import { ADD_TO_BASKET } from "./actionTypes";

const addToBasket = () => dispatch => {
  dispatch({
    type: ADD_TO_BASKET,
    payload: { title: "Jerk Chicken" }
  });
};

export default addToBasket;
