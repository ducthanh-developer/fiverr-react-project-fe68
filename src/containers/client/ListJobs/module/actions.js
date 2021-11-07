import fiverrApi from "apis/fiverrApi";
import { SET_LIST_JOBS } from "./types";

export const actFetchListJobs = (jobName = "") => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchListJobsApi(jobName);
      dispatch({
        type: SET_LIST_JOBS,
        payload: result.data,
      });
    } catch (errors) {
      console.log("Errors: ", errors);
    }
  };
};
