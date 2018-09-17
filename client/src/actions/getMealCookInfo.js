import axios from "axios";

import { GET_MEAL_COOK_INFO } from "./actionTypes";

const getMealCookInfo = mealId => {
  return dispatch => {
    dispatch({
      type: GET_MEAL_COOK_INFO,
      payload: axios.get(`/api/mealCookInfo/${mealId}`)
    });
  };
};

export default getMealCookInfo;
