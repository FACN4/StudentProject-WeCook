import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealListReducer from "./getMealListReducer";

export default combineReducers({
  addToBasket: basketReducer,
  mealData: getMealInfoReducer,
  mealList: getMealListReducer
});
