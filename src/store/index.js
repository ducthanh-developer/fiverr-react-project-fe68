import { createStore, combineReducers, applyMiddleware } from "redux";
import fiverrDetailJobReducer from "containers/client/FiverrDetail/module/reducer";
import tittleJobReducer from "containers/client/DetailJobs/modules/reducer";
import { JobReducer } from "containers/client/ListJobs/module/reducer";
import { TypeJobsReducer } from "components/Header/module/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  fiverrDetailJobReducer,
  tittleJobReducer,
  JobReducer,
  TypeJobsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
