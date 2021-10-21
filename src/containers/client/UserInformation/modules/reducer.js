import { FETCH_USER_LIST_JOBS_FAIL, FETCH_USER_LIST_JOBS_SUCCESS } from "./type";


const initialState = {
  userJobs:[],
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
    default:
      return state;
  }
};

export default userListJobsReducer;
