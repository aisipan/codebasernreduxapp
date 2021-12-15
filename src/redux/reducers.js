import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// modules
import userReducer from './modules/login/reducers';
import historyReducers from './modules/transport/reducers';

const rootReducer = combineReducers({
    userReducer,
    historyReducers,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [historyReducers], // to be not persisted
  // transforms: [
  //   encryptTransform({
  //     secretKey: 'T25lc3Bpcml0MjAxOGdtc21vYmlsZQ',
  //     onError: function (error) {
  //       // Handle the error.
  //       console.log("encrypt redux persist error", error)
  //     },
  //   }),
  // ]
};

export default persistReducer(persistConfig, rootReducer);