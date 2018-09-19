import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import basketReducer from "./basketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealReviewsReducer from "./getMealReviewsReducer";
import findMealsReducer from "./findMealsReducer";
import getMealCookInfoReducer from "./getMealCookInfoReducer";
import userStatusReducer from "./userStatusReducer"

export default combineReducers({
  basket: basketReducer,
  mealData: getMealInfoReducer,
  mealList: findMealsReducer,
  mealReviews: getMealReviewsReducer,
  form: formReducer,
  mealReviews: getMealReviewsReducer,
  mealList: getMealListReducer,
  userStatus: userStatusReducer,
  mealCookData: getMealCookInfoReducer
});
