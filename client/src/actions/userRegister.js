import axios from "axios";
import { USER_REGISTER } from "./actionTypes";

const userRegister = creds => {
  return dispatch => {
    dispatch({
      type: USER_REGISTER,
      payload: axios.post("/api/userRegister", creds)
    });
  };
};

export default userRegister;
