import {USER_LOGIN} from "../actions/actionTypes"

const initialState = {
  isPending:false,
  isFulfilled:false,
  isRejected:false,
  loggedIn:false
};

export default function (state = initialState,action) {
  switch(action.type) {
    case `${USER_LOGIN}_PENDING`:
      return { isPending: true };
    case `${USER_LOGIN}_FULFILLED`:
      return { loggedIn: true, isFulfilled: true };
    case `${USER_LOGIN}_REJECTED`:
      return { isRejected: true, error: action.payload };
    default:
      return state;
  }
}
