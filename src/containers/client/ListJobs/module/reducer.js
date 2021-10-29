import { Job } from "_core/models/Job";
import { SET_LIST_JOBS } from "./types";

const initialState = {
  listJobs: [new Job()],
};

export const JobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIST_JOBS: {
      state.listJobs = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
