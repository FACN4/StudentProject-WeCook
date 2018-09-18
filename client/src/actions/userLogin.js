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

//
// function login(username, password) {
//     return dispatch => {
//         dispatch(request({ username }));
//
//         userService.login(username, password)
//             .then(
//                 user => {
//                     dispatch(success(user));
//                     history.push('/');
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };
//
//     function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
//     function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
// }
