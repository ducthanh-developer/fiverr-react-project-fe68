import { createStore, combineReducers, applyMiddleware } from "redux";
import fiverrDetailJobReducer from 'containers/client/FiverrDetail/module/reducer';

// import movieReducer from "containers/client/Home/module/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  // movieReducer,
  // fiverrDetailJobReducer,
  fiverrDetailJobReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
