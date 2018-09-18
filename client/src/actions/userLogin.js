import axios from "axios";
import { USER_LOGIN } from "./actionTypes";

const userLogin = creds => {
  return dispatch => {
    dispatch({
      type: USER_LOGIN,
      payload: axios.post("/api/userLogin", creds)
    });
  };
};

export default userLogin;
