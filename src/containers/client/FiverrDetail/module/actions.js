
import fiverrApi from "apis/fiverrApi";
import { FETCH_DETAIL_JOB_SUCCESS } from "./types";


export const actFetchListSuccess = (jobDetail) => ({
  type: FETCH_DETAIL_JOB_SUCCESS,
  payload: jobDetail,
});
export const actGetJobDetail = () => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchAllJobFiverrApi();

      console.log("result ", result);
      dispatch(actFetchListSuccess(result.data));
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};



