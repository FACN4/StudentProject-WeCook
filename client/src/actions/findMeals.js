import axios from "axios";
import { FIND_MEALS, MEALS_FOUND } from "./actionTypes";

export const findMeals = ({ postcode, deliveryDate }) => {
  return dispatch => {
    axios(`http://api.postcodes.io/postcodes/${postcode}`)
      .then(({ data: { result: location } }) => {
        return axios
          .post("/api/findMeals", { location, deliveryDate })
          .catch(() => console.log("No Meals available"));
      })
      .then(res => {
        const { data } = res;
        if (data.length){
          return dispatch({
            type: FIND_MEALS,
            payload: res
          });
        } else {
          return dispatch({
            type: `${FIND_MEALS}_REJECTED`,
            payload: null
          });
        }
      })
      .catch(() => console.log("Please enter a valid postcode"));
  };
};

export const mealsFound = () => {
  return dispatch => {
    dispatch({
      type: MEALS_FOUND,
      payload: null
    });
  };
};
