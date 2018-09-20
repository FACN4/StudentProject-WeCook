import axios from "axios";
import { GET_CONFIRMATION_DATA } from "./actionTypes";

const getConfirmationData = () => {
  return dispatch => {
    dispatch({
      type: GET_CONFIRMATION_DATA,
      payload: axios('/api/confirmationData')
    });
  };
};

export default getConfirmationData;
