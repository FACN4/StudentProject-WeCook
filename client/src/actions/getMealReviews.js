import axios from "axios";
import { GET_MEAL_REVIEWS } from "./actionTypes";

const getMealReviews = mealId => {
  return dispatch => {
    dispatch({
      type: GET_MEAL_REVIEWS,
      payload: axios.get(`/api/mealReviews/${mealId}`)
    });
  };
};

export default getMealReviews;
