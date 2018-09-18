import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import basketReducer from "./basketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealReviewsReducer from "./getMealReviewsReducer";
import getMealListReducer from "./getMealListReducer";
import userRegisterReducer from "./userRegisterReducer"
import getMealCookInfoReducer from "./getMealCookInfoReducer";

export default combineReducers({
  basket: basketReducer,
  mealData: getMealInfoReducer,
  form: formReducer,
  mealReviews: getMealReviewsReducer,
  mealList: getMealListReducer,
  userRegister: userRegisterReducer,
  mealCookData: getMealCookInfoReducer
});
