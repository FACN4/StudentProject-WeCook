import { combineReducers } from "redux";
import addBasketReducer from "./addBasketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealListReducer from "./getMealListReducer";

export default combineReducers({
  addToBasket: addBasketReducer,
  mealData: getMealInfoReducer,
  mealList: getMealListReducer
});
