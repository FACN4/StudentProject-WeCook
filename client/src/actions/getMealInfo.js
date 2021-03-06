import axios from "axios";
import { GET_MEAL_INFO } from "./actionTypes";

const getMealInfo = mealId => {
  return dispatch => {
    dispatch({
      type: GET_MEAL_INFO,
      payload: axios.get(`/api/mealInfo/${mealId}`)
    });
  };
};

export default getMealInfo;
