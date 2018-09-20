import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import basketReducer from "./basketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealReviewsReducer from "./getMealReviewsReducer";
import findMealsReducer from "./findMealsReducer";
import getMealCookInfoReducer from "./getMealCookInfoReducer";
import userStatusReducer from "./userStatusReducer"
import getConfirmationData from "./getConfirmationData"

export default combineReducers({
  basket: basketReducer,
  mealData: getMealInfoReducer,
  mealList: findMealsReducer,
  mealReviews: getMealReviewsReducer,
  form: formReducer,
  userStatus: userStatusReducer,
  mealCookData: getMealCookInfoReducer,
  confirmationData: getConfirmationData
});
