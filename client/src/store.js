import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const initialState = {};

const middleware = [logger,promiseMiddleware(), thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(...middleware),
));

export default store;
