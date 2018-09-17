import axios from "axios";

import { GET_COOK_MEAL_INFO } from "./actionTypes";

const getCookInfo = mealId => {
  return dispatch => {
    dispatch({
      type: GET_COOK_MEAL_INFO,
      payload: axios.get(`/api/mealCookInfo/${mealId}`)
    });
  };
};

export default getCookInfo;
