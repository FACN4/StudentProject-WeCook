import axios from "axios";
import { GET_MEAL_LIST } from "./actionTypes";

const getMealList = () => {
  return dispatch => {
    dispatch({
      type: GET_MEAL_LIST,
      payload: axios.get(`/api/mealList/`)
    });
  };
};

export default getMealList;
