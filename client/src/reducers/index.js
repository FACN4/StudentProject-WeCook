import { combineReducers } from "redux";
import addBasketReducer from "./addBasketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealListReducer from "./getMealListReducer";
import getCookMealInfoReducer from "./getCookMealInfoReducer";

export default combineReducers({
  addToBasket: addBasketReducer,
  mealData: getMealInfoReducer,
  mealList: getMealListReducer,
  cookData: getCookMealInfoReducer
});
