import axios from "axios";
import { FIND_MEALS } from "./actionTypes";

const findMeals = (reqDetails) => {
  return dispatch => {
    dispatch({
      type: FIND_MEALS,
      payload: axios.post('/api/findMeals',reqDetails)
    });
  };
};

export default findMeals;
