import { createStore, combineReducers, applyMiddleware } from "redux";
import fiverrDetailJobReducer from 'containers/client/FiverrDetail/module/reducer';
import tittleJobReducer from 'containers/client/DetailJobs/modules/reducer'
import    userListJobsReducer from 'containers/client/UserInformation/modules/reducer'

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  fiverrDetailJobReducer,
  tittleJobReducer,
  userListJobsReducer,
  // bookingJobReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
