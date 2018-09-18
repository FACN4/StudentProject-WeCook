import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import basketReducer from "./basketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealReviewsReducer from "./getMealReviewsReducer";
import getMealListReducer from "./getMealListReducer";
import getMealCookInfoReducer from "./getMealCookInfoReducer";

export default combineReducers({
  basket: basketReducer,
  mealData: getMealInfoReducer,
  mealList: getMealListReducer,
  mealReviews: getMealReviewsReducer,
  form: formReducer,
  mealCookData: getMealCookInfoReducer
});
