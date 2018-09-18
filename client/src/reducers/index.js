import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import basketReducer from "./basketReducer";
import getMealInfoReducer from "./getMealInfoReducer";
import getMealReviewsReducer from "./getMealReviewsReducer";
import getMealListReducer from "./getMealListReducer";

// import { alertReducer } from "./alertReducer";
// import { registrationReducer } from "./registrationReducer";
// import { authenticationReducer } from "./authenticationReducer";
// import { usersReducer } from "./usersReducer";

export default combineReducers({
  basket: basketReducer,
  mealData: getMealInfoReducer,
  form: formReducer,
  mealReviews: getMealReviewsReducer,
  mealList: getMealListReducer
});
// authentication,
// registration,
// users,
// alert
