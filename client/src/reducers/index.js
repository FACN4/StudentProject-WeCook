import { combineReducers } from "redux";

import addBasketReducer from "./addBasketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealReviewsReducer from "./getMealReviewsReducer"
import getMealListReducer from "./getMealListReducer";

export default combineReducers({
  addToBasket: addBasketReducer,
  mealData: getMealInfoReducer,
  mealReviews: getMealReviewsReducer,
  mealList: getMealListReducer
});
