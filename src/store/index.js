import { createStore, combineReducers, applyMiddleware } from "redux";
import fiverrDetailJobReducer from 'containers/client/FiverrDetail/module/reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  fiverrDetailJobReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
