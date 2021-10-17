import { FETCH_USER_LIST_JOBS_FAIL, FETCH_USER_LIST_JOBS_SUCCESS } from "./type";


const initialState = {
  userjobs:null,
  error: '',
};

const userListJobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_LIST_JOBS_SUCCESS:
      state.userjobs = payload;
      return { ...state, };
    case FETCH_USER_LIST_JOBS_FAIL:
      state.error = payload;
      return { ...state };
    default:
      return state;
  }
};

export default userListJobsReducer;
