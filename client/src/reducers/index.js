import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import addBasketReducer from "./addBasketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealListReducer from "./getMealListReducer";

// import { alertReducer } from "./alertReducer";
// import { registrationReducer } from "./registrationReducer";
// import { authenticationReducer } from "./authenticationReducer";
// import { usersReducer } from "./usersReducer";

export default combineReducers({
  addToBasket: addBasketReducer,
  mealData: getMealInfoReducer,
  mealList: getMealListReducer,
  form: formReducer
});
// authentication,
// registration,
// users,
// alert
