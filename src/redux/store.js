import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import persistedReducer from "./reducers";

const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    // createLogger({
    //   collapsed: true,
    //   // eslint-disable-next-line no-undef
    //   predicate: () => __DEV__,
    // }),
  ),
];

/* eslint-disable no-undef */
const composeEnhancers =
  (__DEV__ &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);