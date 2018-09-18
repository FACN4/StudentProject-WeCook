import axios from "axios";
import { USER_LOGOUT } from "./actionTypes";

const userLogout = () => {
  return dispatch => {
    dispatch({
      type: USER_LOGOUT,
      payload: axios.get("/api/userLogout")
    });
  };
};

export default userLogout;
