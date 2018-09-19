import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers';

const initialState = {};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['mealList', 'userStatus'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [promiseMiddleware(), thunk];

const store = createStore(persistedReducer, initialState, composeWithDevTools(
  applyMiddleware(...middleware),
));

const persistor = persistStore(store);

export {store, persistor};
