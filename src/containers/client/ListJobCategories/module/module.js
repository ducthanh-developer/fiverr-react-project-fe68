import { SubTypeJob } from "_core/models/SubTypeJob";
import { TypeJob } from "_core/models/TypeJob";
import { SET_LIST_JOB_BY_TYPE, SET_TYPE_JOB_DETAIL } from "./types";

const initialStateJobDetail = {
  jobDetail: new TypeJob(),
};

const initialStateTypeJob = {
  listTypeJob: [new SubTypeJob()],
};

export const JobDetailReducer = (
  state = initialStateJobDetail,
  { type, payload }
) => {
  switch (type) {
    case SET_TYPE_JOB_DETAIL: {
      state.jobDetail = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export const SubTypeJobReducder = (
  state = initialStateTypeJob,
  { type, payload }
) => {
  switch (type) {
    case SET_LIST_JOB_BY_TYPE: {
      state.listTypeJob = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
