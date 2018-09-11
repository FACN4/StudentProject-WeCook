import { combineReducers } from 'redux';
import addBasketReducer from './addBasketReducer';

export default combineReducers({
  addToBasket: addBasketReducer,
});
