import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import basketReducer from "./basketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealReviewsReducer from "./getMealReviewsReducer";
import getMealListReducer from "./getMealListReducer";
import getMealCookInfoReducer from "./getMealCookInfoReducer";
import userStatusReducer from "./userStatusReducer"

export default combineReducers({
  basket: basketReducer,
  mealData: getMealInfoReducer,
  form: formReducer,
  mealReviews: getMealReviewsReducer,
  mealList: getMealListReducer,
  userStatus: userStatusReducer,
  mealCookData: getMealCookInfoReducer
});
