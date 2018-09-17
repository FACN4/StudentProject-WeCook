import { combineReducers } from "redux";
import addBasketReducer from "./addBasketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealListReducer from "./getMealListReducer";
import { alertReducer } from "./alertReducer";
import { authenticationReducer } from "./authenticationReducer";
import { registrationReducer } from "./registrationReducer";
import { usersReducer } from "./usersReducer";


export default combineReducers({
  addToBasket: addBasketReducer,
  mealData: getMealInfoReducer,
  mealList: getMealListReducer,
  authentication,
  registration,
  users,
  alert
});
