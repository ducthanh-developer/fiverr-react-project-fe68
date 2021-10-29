import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import fiverrDetailJobReducer from 'containers/client/FiverrDetail/module/reducer';
import tittleJobReducer from 'containers/client/DetailJobs/modules/reducer'
import    userListJobsReducer from 'containers/client/UserInformation/modules/reducer'
import authReducer from "containers/shared/LoginFiverr/modules/reducer";
import { JobReducer } from "containers/client/ListJobs/module/reducer";

import registerReducer from 'containers/shared/Register/modules/reducer'
// import historyBokingJobReducer from "containers/client/UserInformation/HistoryJobs/modules/reducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  fiverrDetailJobReducer,
  tittleJobReducer,
  userListJobsReducer,
  authReducer,
  registerReducer,
  JobReducer,

  // historyBokingJobReducer,
  // bookingJobReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
