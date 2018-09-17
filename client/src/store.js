import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const initialState = {};

const middleware = [promiseMiddleware(), thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(...middleware),
));

export default store;
