import { FETCH_USER_LIST_JOBS_FAIL, FETCH_USER_LIST_JOBS_SUCCESS, FETCH__HISTORY__JOBS__FAIL, FETCH__HISTORY__JOBS__SUCCESS } from "./type";


const initialState = {
  userJobs:[],
  historyJobs:[],
  error: '',
};

const userListJobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_LIST_JOBS_SUCCESS:
      state.userJobs = payload;
      return { ...state, };
    case FETCH_USER_LIST_JOBS_FAIL:
      state.error = payload;
      return { ...state };
      case FETCH__HISTORY__JOBS__SUCCESS:
      state.historyJobs = payload;
      return { ...state, };
    case FETCH__HISTORY__JOBS__FAIL:
      state.error = payload;
      return { ...state };
    default:
      return state;
  }
};

export default userListJobsReducer;
