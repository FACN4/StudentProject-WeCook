import axios from "axios";
import { GET_BASKET } from "./actionTypes";

const getMealList = () => {
  return dispatch => {
    dispatch({
      type: GET_BASKET,
      payload: axios.get(`/api/basket/`)
    });
  };
};

export default getMealList;
