import fiverrApi from "apis/fiverrApi";
import { SET_LIST_JOBS } from "./types";

export const actFetchListJobs = () => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchListJobsApi();
      dispatch({
        type: SET_LIST_JOBS,
        payload: result.data,
      });
    } catch (errors) {
      console.log("Errors: ", errors);
    }
  };
};
