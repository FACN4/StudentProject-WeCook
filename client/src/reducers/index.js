import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealReviewsReducer from "./getMealReviewsReducer";
import getMealListReducer from "./getMealListReducer";

export default combineReducers({
  basket: basketReducer,
  mealData: getMealInfoReducer,
  mealReviews: getMealReviewsReducer,
  mealList: getMealListReducer
});
