import { DetailJob } from "_core/models/DetailJob";
import { FETCH_DETAIL_JOB_FAIL, FETCH_DETAIL_JOB_SUCCESS } from "./types";

const initialState = {
  jobDetail: new DetailJob(),
  error: "",
};

const fiverrDetailJobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DETAIL_JOB_SUCCESS:
      state.jobDetail = payload;
      return { ...state };
    case FETCH_DETAIL_JOB_FAIL:
      state.error = payload;
      return { ...state };
    default:
      return state;
  }
};

export default fiverrDetailJobReducer;
