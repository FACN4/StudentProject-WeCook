import { USER_LOGIN, USER_REGISTER  } from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  registration: {
    isPending: false,
    isFulfilled: false,
    isRejected: false
  },
  loggingIn: {
    isPending: false,
    isFulfilled: false,
    isRejected: false
  }
};

const userStatusReducer = (state = initialState, action) => {
  const { loggingIn, registration } = state;
  switch (action.type) {
    case `${USER_LOGIN}_PENDING`:
      return { ...state, loggingIn: { ...loggingIn, isPending: true } };
    case `${USER_LOGIN}_FULFILLED`:
      return {
        ...state,
        loggedIn: true,
        loggingIn: { ...loggingIn, isFulfilled: true }
      };
    case `${USER_LOGIN}_REJECTED`:
      return {
        ...state,
        loggingIn: { ...loggingIn, isRejected: true, error: action.payload }
      };
    case `${USER_REGISTER}_PENDING`:
      return { ...state, registration: { ...registration, isPending: true } };
    case `${USER_REGISTER}_FULFILLED`:
      return {
        ...state,
        loggedIn: true,
        registration: { ...registration, isFulfilled: true }
      };
    case `${USER_REGISTER}_REJECTED`:
      return {
        ...state,
        registration: {
          ...registration,
          isRejected: true,
          error: action.payload
        }
      };
    default:
      return state;
  }
};

export default userStatusReducer;
