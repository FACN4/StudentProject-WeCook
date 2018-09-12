import { combineReducers } from 'redux';
import addBasketReducer from './addBasketReducer';
import getMealInfoReducer from './getMealInfoReducer'

export default combineReducers({
  addToBasket: addBasketReducer,
  mealData: getMealInfoReducer
});
